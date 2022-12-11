const res=require('./index');

res.myFileWriter('create.txt','sandeep created a file');
res.myFileReader('create.txt');
res.myFileUpdater('create.txt','\nkasturi updated file');
//res.myFileDeleter('create.txt');