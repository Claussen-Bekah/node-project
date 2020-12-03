


create table words (id serial primary key, word varchar(100));

create table hints (id serial primary key, hint varchar(500), word_id int references words(id));

create table scores (id serial PRIMARY key, username varchar(100), score int);

insert into words (word) values ('beard'), ('caller'), ('claps'),('arts'),('ate'), ('paces'),('below'),('begin'),('bard'),('dater'),('pass'),('heaps'),('flow'),('hops'),('manes'),('opt'),('reigns'),('piers'),('pores'),('realist'),('rescue'),('raps'),('rashes'),('rattles'),('reins'),('serve'),('sway'),('taster'),('weird'),('whiter');

insert into hints (hint, word_id) values ('challenge as unqualified to perform legal duties', 24), ('a harsh, grating noise', 25), ('a cutting instrument', 26), ('cause to feel sudden shock or alarm', 27), ('a device that makes a loud prolonged sound ', 28), ('the peak', 29), ('a person who sings', 30), ('inquire too closely', 31), ('written or spoken language in its ordinary form', 32), ('the sale of goods to the public', 33);