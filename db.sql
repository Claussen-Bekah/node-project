create table words (id serial primary key, word varchar(100));

create table hints (id serial primary key, hint varchar(500), word_id int references words(id));

create table scores (id serial PRIMARY key, username varchar(100), score int);

insert into words (word) values 
('abed'), 
('abet'), 
('abets'),
('abut'),
('acme'), 
('acre'),
('acres'),
('actors'),
('actress'),
('airmen'),
('alert'),
('alerted'),
('ales'),
('aligned'),
('angel'),
('antler'),
('apt'),
('arches'),
('are'),
('arm'),
('arrest'),
('artist'),
('arcs'),
('ascent'),
('ascot'),
('asleep'),
('asp'),
('aspired'),
('asps'),
('assert'),
('aster'), 
('astride'), 
('auctioned'),
('awls'),
('baker'), 
('barely'),
('bats'),
('bleats'),
('bluest'),
('bores'),
('brag'),
('calipers'),
('canter'),
('canters'),
('caret'),
('carets'),
('catered'),
('cider'),
('claimed'),
('code'),
('construe'),
('corset'),
('cratered'),
('cruel'),
('dale'),
('dare'),
('danger'),
('darters'),
('dates'),
('dearths')
;

insert into words (word) values 
('decanter'), 
('deigns'), 
('deist'),
('demerit'),
('denter'), 
('deltas'),
('demo'),
('desert'),
('detail'),
('detains'),
('detour'),
('repaid'),
('diet')
;



insert into hints (hint, word_id) values 
('command or order (someone) to do something', 34), 
('the second letter of the Greek alphabet', 35),
('an animal, especially a large or dangerous four-footed one', 36),
('a large brass wind instrument', 37),
('a heavy club, typically having a metal head and spikes', 38),
('a competition between runners', 39), 
('cause great fear or nervousness in; frighten', 40),
('an oily reddish-brown substance', 41),
('present or organize in a different form or style', 42),
('of, found in, or produced by the sea', 43),
('change or cause to change', 44),
('belonging to the same family, group, or type; connected', 45),
('the exchange of a commodity for money', 46),
('a business relation', 47),
('collect gradually and bit by bit', 48),
('an amount paid or received as rent', 49),
('touch quickly and gently with the flat of the hand', 50),
('try to find something by looking', 51),
('the organ of hearing', 52), 
('impair the appearance of', 53),
('not occurring very often', 54), 
('a narrow passage of water connecting two seas', 55),
('a four-wheeled road vehicle', 56),
('a straight line that cuts a curve in two or more parts', 57),
('the part of the land near the sea', 58),
('(of time) pass or go by', 59), 
('gradually weaken or destroy ', 60),
('the complete loss or absence of hope', 61),
('move or cause to move in a specified direction', 62),
('look fixedly or vacantly at someone or something', 63),
('a fixed price paid or charged for something', 64),
('a long, angry speech of criticism or accusation', 65),
('the process of receiving or giving systematic instruction', 66),
('the system of rules which a particular community recognizes', 67),
('separate or cause to separate', 68),
('unfocused or filmy from sleep or tiredness', 69),
('violently pierce', 70),
('firmly fixed', 71),
('move in an energetic or noisy manner', 72), 
('serious, sensible, and solemn', 73),
('grasp or seize suddenly and roughly', 74), 
('an exact copy or model of something', 75),
('a sugary fluid secreted by plants', 76),
('say that one no longer holds an opinion or belief', 77),
('provide food and drink', 78),
('each of a set of small wheels', 79), 
('bring (something) into existence', 80),
('shed tears', 81),
('utter or deliver words or a speech', 82),
('a female student', 83),
('tell someone about something', 84),
('a person, vehicle, or group accompanying another for protection', 85),
('go back over', 86),
('money', 87),
('be in charge or command of', 88),
('regarded with deep affection', 89),
('a male goose', 90),
(' have (someone) as a principal performer', 91),
('the place or role that someone or something should have', 92),
('long, thin strands of cotton,', 93),
('say that one no longer holds an opinion or belief', 94),
('write a name for purposes of identification', 95),
('prepare for publication by correcting or modifying it', 96),
('deserve or be worthy of', 97),
('pay someone for the use of', 98),
('schedule; plan', 99),
('a way or manner in which something occurs', 100),
('discourage (someone) from doing something', 101),
('make or become wider, larger, or more open', 102),
('as an alternative or substitute', 103),
('defeat and cause to retreat in disorder', 104),
('join or connect', 105),
('achieve the same score', 106)
;


