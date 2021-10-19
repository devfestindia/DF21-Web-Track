function openForm() {
  document.getElementById("chatForm").style.display = "block";
}

function closeForm() {
  document.getElementById("chatForm").style.display = "none";
}
(async () => {
    let bookData = await fetch( "tfjs/data.json" ).then( r => r.json() );
    let data = bookData.data;

    let questions = data.map( qa => qa.question );

    let bagOfWords = {};
    let allWords = [];
    let wordReference = {};
    questions.forEach( q => {
        let words = q.replace(/[^a-z ]/gi, "").toLowerCase().split( " " ).filter( x => !!x );
        words.forEach( w => {
            if( !bagOfWords[ w ] ) {
                bagOfWords[ w ] = 0;
            }
            bagOfWords[ w ]++;
        });
    });

    allWords = Object.keys( bagOfWords );
    allWords.forEach( ( w, i ) => {
        wordReference[ w ] = i + 1;
    });

    const maxSentenceLength = 30;
    let vectors = [];
    questions.forEach( q => {
        let qVec = [];
        let words = q.replace(/[^a-z ]/gi, "").toLowerCase().split( " " ).filter( x => !!x );
        for( let i = 0; i < maxSentenceLength; i++ ) {
            if( words[ i ] ) {
                qVec.push( wordReference[ words[ i ] ] );
            }
            else {
                qVec.push( 0 );
            }
        }
        vectors.push( qVec );
    });

    let outputs = questions.map( ( q, index ) => {
        let output = [];
        for( let i = 0; i < questions.length; i++ ) {
            output.push( i === index ? 1 : 0 );
        }
        return output;
    });

    const model = tf.sequential();
    model.add(tf.layers.embedding( { inputDim: allWords.length + 1, outputDim: 128, inputLength: maxSentenceLength, maskZero: true } ) );
    model.add(tf.layers.simpleRNN( { units: 32 } ) );
    model.add(tf.layers.dense( { units: 50 } ) );
    model.add(tf.layers.dense( { units: 25 } ) );
    model.add(tf.layers.dense( {
        units: questions.length,
        activation: "softmax"
    } ) );

    model.compile({
        optimizer: tf.train.adam(),
        loss: "categoricalCrossentropy",
        metrics: [ "accuracy" ]
    });

    const xs = tf.stack( vectors.map( x => tf.tensor1d( x ) ) );
    const ys = tf.stack( outputs.map( x => tf.tensor1d( x ) ) );
    await model.fit( xs, ys, {
        epochs: 20,
        shuffle: true,
        callbacks: {
            onEpochEnd: ( epoch, logs ) => {
                console.log( "Epoch #", epoch, logs );
            }
        }
    });

    document.getElementById( "submit" ).addEventListener( "click", async function( event ) {
       	var node = document.createElement("div");
       	var text = document.getElementById('question').value
		var textnode = document.createTextNode('User : ' + document.getElementById('question').value);
		document.getElementById('question').value = '';	
		node.appendChild(textnode);
		document.getElementById("chatBox").appendChild(node); 

        let qVec = [];
        let words = text.replace(/[^a-z ]/gi, "").toLowerCase().split( " " ).filter( x => !!x );
        for( let i = 0; i < maxSentenceLength; i++ ) {
            if( words[ i ] ) {
                qVec.push( wordReference[ words[ i ] ] );
            }
            else {
                qVec.push( 0 );
            }
        }

        let prediction = await model.predict( tf.stack( [ tf.tensor1d( qVec ) ] ) ).data();
        let id = prediction.indexOf( Math.max( ...prediction ) );
        var node = document.createElement("div");
       	var text = data[ id ].answer;
		var textnode = document.createTextNode('Bot : ' + text);
		node.appendChild(textnode);
		document.getElementById("chatBox").appendChild(node);
    });
})();