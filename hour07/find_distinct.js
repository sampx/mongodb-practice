mongo = new Mongo("localhost");
wordsDB = mongo.getDB("words");
wordsColl = wordsDB.getCollection("word_stats");
results = wordsColl.distinct('size');
print("Distinct sizes of words:");
printjson(results);
results = wordsColl.distinct('size', {first:'q'});
print("Distinct sizes of words starting with Q:");
printjson(results);
results = wordsColl.distinct('last', {'stats.vowels':0});
print("Distinct last letter for words with no vowels");
printjson(results);
results = wordsColl.distinct('first', {last:'u'});
print("Distinct first letter for words ending in U:");
printjson(results);
print("Distinct consonant count in words longer than 10 letters:");
results = wordsColl.distinct('stats.consonants',{size:{$gt:10}});
printjson(results);