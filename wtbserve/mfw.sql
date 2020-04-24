#设置客户端连接服务器端编码
SET NAMES UTF8;
#丢弃数据库，如果存在
DROP DATABASE IF EXISTS mfw;
#创建数据库，设置编码
CREATE DATABASE mfw CHARSET=UTF8;
#进入数据库
USE mfw;  

-- 用户信息表
-- CREATE TABLE mfw_user(
--   uid INT PRIMARY KEY AUTO_INCREMENT,
--   uname VARCHAR(255),
--   upwd VARCHAR(255),
-- );

/**作家基本信息**/
CREATE TABLE mfw_star(
  id INT PRIMARY KEY AUTO_INCREMENT,
  usid INT, #作家唯一编号 
  uname VARCHAR(255), #明星作家名字
  starimg  VARCHAR(200), #明显作家图片
  headshot VARCHAR(200), #作家头像
  preface VARCHAR(200), #明星自序
  works1 VARCHAR(200), #作品名字
  works2 VARCHAR(200)
);
/*列表文章*/
-- CREATE TABLE mfw_abstract(
--   aid INT PRIMARY KEY AUTO_INCREMENT,
--   uid INT,
--   -- titleImg VARCHAR(50),#头部图片
--   -- userImg VARCHAR(50),#用户头像
--   -- worksname VARCHAR(50),#作品名字
--   -- uname VARCHAR(20), #用户名字
--   worksTime VARCHAR(50),#作品的时间戳
--   textHtml VARCHAR(10000),#作品正文
--   catalog VARCHAR(1000), #段落内容
--   -- synopsis VARCHAR(200) NOT NULL DEFAULT '该用户有点懒啊，没有写篇文章的简介，但是正文非常精彩' #作品简介
-- );
/*用户信息表*/
CREATE TABLE mfw_user(
  uid INT PRIMARY KEY AUTO_INCREMENT, 
  uname VARCHAR(20),
  upwd VARCHAR(32),
  uphone VARCHAR(11), 
  sex VARCHAR(1) NOT NULL DEFAULT '',
  age VARCHAR(3) NOT NULL DEFAULT '',	
  touxiang VARCHAR(40) NOT NULL DEFAULT '',
  city VARCHAR(40) NOT NULL DEFAULT '',
  birthday VARCHAR(15) NOT NULL DEFAULT '',
  introduction VARCHAR(100) NOT NULL DEFAULT '',
  beijing VARCHAR(1) NOT NULL DEFAULT '1'
);
INSERT INTO mfw_user VALUES(1,'hynn','Hy318806','18102382469','0','22','img/hy/index/author1 (1).jpeg','重庆','10113213196','没啥可说的','2');
/**作家导读作品**/
CREATE TABLE mfw_opus(
  aid INT PRIMARY KEY AUTO_INCREMENT, #作品唯一编号
   uid INT, #作家唯一编号
   uname VARCHAR(200), #作家名字
   unamesm VARCHAR(200), #作家超小头像通过查询mfw_user获取
   opusimg VARCHAR(200), #作品图片
   works VARCHAR(200), #作品名字
   synopsis VARCHAR(200) NOT NULL DEFAULT '该用户有点懒啊，没有写篇文章的简介，但是正文非常精彩', #作品简介
   place VARCHAR(200) NOT NULL DEFAULT '大千世界', #作品地点
   worksTime VARCHAR(50),#作品的时间戳
   textHtml VARCHAR(10000),#作品正文
   catalog VARCHAR(1000), #段落内容
   cc INT NOT NULL DEFAULT 0,            #作品点击量
   bb INT NOT NULL DEFAULT 0,            #粉丝量
   zan INT NOT NULL DEFAULT 0            #作品点赞量
);
/**旅行家作品**/
CREATE TABLE mfw_aaa(
  id INT PRIMARY KEY AUTO_INCREMENT,
  usid INT, #作家编号
  uname VARCHAR(200), #作家名字
  headshot VARCHAR(200), #作家头像
  opusimg VARCHAR(200), #作品图片
  synopsis VARCHAR(200)  #作品简介
);

/*更多旅行家**/
CREATE TABLE mfw_bbb(
  id INT PRIMARY KEY AUTO_INCREMENT,
  headshot VARCHAR(200),
  authorname VARCHAR(200)
);
INSERT INTO mfw_bbb VALUES(1,'img/hy/index/author1 (1).jpeg','张三'),
(null,'img/hy/index/author1 (2).jpeg','张三'),
(null,'img/hy/index/author1 (3).jpeg','张三'),
(null,'img/hy/index/author1 (4).jpeg','张三'),
(null,'img/hy/index/author1 (5).jpeg','张三'),
(null,'img/hy/index/author1 (6).jpeg','张三'),
(null,'img/hy/index/author1 (7).jpeg','张三'),
(null,'img/hy/index/author1 (8).jpeg','张三'),
(null,'img/hy/index/author1 (9).jpeg','张三'),
(null,'img/hy/index/author1 (10).jpeg','张三'),
(null,'img/hy/index/author1 (11).jpeg','张三'),
(null,'img/hy/index/author1 (12).jpeg','张三'),
(null,'img/hy/index/author1 (13).jpeg','张三'),
(null,'img/hy/index/author1 (14).jpeg','张三'),
(null,'img/hy/index/author1 (15).jpeg','张三'),
(null,'img/hy/index/author1 (16).jpeg','张三'),
(null,'img/hy/index/author1 (17).jpeg','张三'),
(null,'img/hy/index/author1 (18).jpeg','张三'),
(null,'img/hy/index/author1 (19).jpeg','张三'),
(null,'img/hy/index/author1 (20).jpeg','张三'),
(null,'img/hy/index/author1 (21).jpeg','张三'),
(null,'img/hy/index/author1 (22).jpeg','张三'),
(null,'img/hy/index/author1 (23).jpeg','张三'),
(null,'img/hy/index/author1 (24).jpeg','张三'),
(null,'img/hy/index/author1 (25).jpeg','张三'),
(null,'img/hy/index/author1 (26).jpeg','张三'),
(null,'img/hy/index/author1 (27).jpeg','张三'),
(null,'img/hy/index/author1 (28).jpeg','张三'),
(null,'img/hy/index/author1 (29).jpeg','张三'),
(null,'img/hy/index/author1 (30).jpeg','张三'),
(null,'img/hy/index/author1 (31).jpeg','张三'),
(null,'img/hy/index/author1 (32).jpeg','张三'),
(null,'img/hy/index/author1 (33).jpeg','张三'),
(null,'img/hy/index/author1 (34).jpeg','张三'),
(null,'img/hy/index/author1 (35).jpeg','张三'),
(null,'img/hy/index/author1 (36).jpeg','张三'),
(null,'img/hy/index/author1 (37).jpeg','张三'),
(null,'img/hy/index/author1 (38).jpeg','张三'),
(null,'img/hy/index/author1 (39).jpeg','张三'),
(null,'img/hy/index/author1 (40).jpeg','张三'),
(null,'img/hy/index/author1 (41).jpeg','张三'),
(null,'img/hy/index/author1 (42).jpeg','张三'),
(null,'img/hy/index/author1 (43).jpeg','张三'),
(null,'img/hy/index/author1 (44).jpeg','张三'),
(null,'img/hy/index/author1 (45).jpeg','张三'),
(null,'img/hy/index/author1 (46).jpeg','张三'),
(null,'img/hy/index/author1 (47).jpeg','张三'),
(null,'img/hy/index/author1 (48).jpeg','张三'),
(null,'img/hy/index/author1 (49).jpeg','张三'),
(null,'img/hy/index/author1 (50).jpeg','张三'),
(null,'img/hy/index/author1 (51).jpeg','张三'),
(null,'img/hy/index/author1 (52).jpeg','张三'),
(null,'img/hy/index/author1 (53).jpeg','张三'),
(null,'img/hy/index/author1 (54).jpeg','张三'),
(null,'img/hy/index/author1 (55).jpeg','张三'),
(null,'img/hy/index/author1 (56).jpeg','张三'),
(null,'img/hy/index/author1 (57).jpeg','张三'),
(null,'img/hy/index/author1 (58).jpeg','张三'),
(null,'img/hy/index/author1 (59).jpeg','张三'),
(null,'img/hy/index/author1 (60).jpeg','张三'),
(null,'img/hy/index/author1 (61).jpeg','张三'),
(null,'img/hy/index/author1 (62).jpeg','张三'),
(null,'img/hy/index/author1 (63).jpeg','张三'),
(null,'img/hy/index/author1 (64).jpeg','张三'),
(null,'img/hy/index/author1 (65).jpeg','张三'),
(null,'img/hy/index/author1 (66).jpeg','张三'),
(null,'img/hy/index/author1 (67).jpeg','张三'),
(null,'img/hy/index/author1 (68).jpeg','张三'),
(null,'img/hy/index/author1 (69).jpeg','张三'),
(null,'img/hy/index/author1 (70).jpeg','张三'),
(null,'img/hy/index/author1 (71).jpeg','张三'),
(null,'img/hy/index/author1 (72).jpeg','张三'),
(null,'img/hy/index/author1 (73).jpeg','张三'),
(null,'img/hy/index/author1 (74).jpeg','张三'),
(null,'img/hy/index/author1 (75).jpeg','张三'),
(null,'img/hy/index/author1 (76).jpeg','张三'),
(null,'img/hy/index/author1 (77).jpeg','张三'),
(null,'img/hy/index/author1 (78).jpeg','张三'),
(null,'img/hy/index/author1 (79).jpeg','张三'),
(null,'img/hy/index/author1 (80).jpeg','张三'),
(null,'img/hy/index/author1 (81).jpeg','张三'),
(null,'img/hy/index/author1 (82).jpeg','张三'),
(null,'img/hy/index/author1 (83).jpeg','张三'),
(null,'img/hy/index/author1 (85).jpeg','张三'),
(null,'img/hy/index/author1 (86).jpeg','张三'),
(null,'img/hy/index/author1 (87).jpeg','张三'),
(null,'img/hy/index/author1 (88).jpeg','张三'),
(null,'img/hy/index/author1 (89).jpeg','张三'),
(null,'img/hy/index/author1 (90).jpeg','张三'),
(null,'img/hy/index/author1 (91).jpeg','张三'),
(null,'img/hy/index/author1 (92).jpeg','张三'),
(null,'img/hy/index/author1 (93).jpeg','张三'),
(null,'img/hy/index/author1 (94).jpeg','张三'),
(null,'img/hy/index/author1 (95).jpeg','张三'),
(null,'img/hy/index/author1 (96).jpeg','张三'),
(null,'img/hy/index/author1 (97).jpeg','张三'),
(null,'img/hy/index/author1 (98).jpeg','张三'),
(null,'img/hy/index/author1 (99).jpeg','张三'),
(null,'img/hy/index/author1 (100).jpeg','张三'),
(null,'img/hy/index/author1 (101).jpeg','张三');
 
/*旅行家作品*/ 
INSERT INTO mfw_aaa VALUES(6,6,'肥肥安小姐','img/hy/index/writer-1.jpeg','img/hy/index/zuop-1.jpeg','作为一个对旅行这事儿还算有行动力的人，2015年6月，在这个岛国的环岛之旅就按照期望的那样，在日不落的季节里，开始了。'),
(7,7,'锦字','img/hy/index/writer-2.jpeg','img/hy/index/zuop-2.jpeg','我看过珠峰的日出，纳木棤的日落，茶卡浩瀚的星河，在冰沟煮过泡面，在沙漠中央扎营，看过好多好多风景。旅行中，你的人际关系被简化到极致。不论你过去经历过什么，也不管你是怎样的人，一切都可以在上路的瞬间重新开始。'),
(8,8,'南山Nathan','img/hy/index/writer-3.jpeg','img/hy/index/zuop-3.jpeg','曾几何时，我被一张杜布罗夫尼克深入亚得里亚海中的完美古城墙的照片而吸引，也为罗维尼那夜幕下的半岛景色所着迷。所以，我内心知道，克罗地亚，其实距离我不会遥远！因为有了这个向往，我总有一天会踏足那里。只是，没有想到，这一天会来的如此之快！'),
(9,9,'白宇','img/hy/index/writer-4.jpeg','img/hy/index/zuop-4.jpeg','那些日子里，周围的世界是荒凉的，寂静的，大部分时间都在独处，自言自语，内心的欲望也跟高海拔的空气一样稀薄……');


INSERT INTO mfw_star VALUES(1,1,'海盗王基德','img/hy/index/box1.jpeg',null,'海盗王.基德，真名傅定彦，环球探险旅行家，畅销书作者，星野摄影师，英国皇家RPS摄影师，尼康NPS摄影师，新华社签约摄影师，国家地理极致摄影大赛特别大奖得主。 痴迷于天文星空、大航海时代和海盗文化，同时也是户外极限运动爱好者和疯狂的自我实现主义者，用自己特立独行的方式，努力拥抱生活，以完成自己重要的生命表达式。 于2012年末冬季自驾出发，历时80天共28000公里，完成抵达中国大陆的最东、最西、最北和最南端的星空拍摄游历，并出版《追星八十一天》。','沙丁鱼大迁徙－狂野南非','国内首次民间水怪拍摄计划'),
(2,2,'諵譁','img/hy/index/box2.jpeg',null,'蚂蜂窝早期用户。被网站弥漫四处的旅行的味道浸染太久，中毒太深，开始学习拍拍写写。近十年的写作跨度最终累积成的是过往的时间碎片。也喜欢户外运动。有机会出行的时候，不是在深山累成狗就是在大海泡成鱼，繁华都市始终无法成为砰然心动的首选之地。希望能坚持在这里平静的写下去，写给自己的脚步，写出真实的视角，写下未来的时光.','很难用简单的语言去详尽描述登山魅力的所在',null),
(3,3,'韦苡珊','img/hy/index/box3.jpeg',null,'资深人像、旅行摄影师、自由撰稿人，毕业于四川美术学院设计系，独自旅行多国并自拍，用相机记录自己与世界的美。曾上过海拔5244的山口看见珠穆朗玛闪现的一瞬间，也曾下潜至海底20米与鱼儿共潜底，曾在雪原陡坡中滑雪，也曾在滑翔伞上俯视大地。在《摄影之友》杂志刊载“CC教你玩自拍”专栏，摄影作品及刊登于《摄影之友》、《摄影旅游》、《中国摄影家》、《课堂内外》等杂志。','自己就是自己最好的摄影师——自拍教程',null),
(4,4,'kidonly','img/hy/index/box4.jpeg',null,'旅行指南作者，典型水瓶座，多年来行踪不定，虽为汉族，却酷似少数民族，不管去哪儿都会被认作成当地人，常出没于喜马拉雅一带，一度怀疑自己上辈子曾是那里的修行人，喜欢探究旅行与心灵的关系。','1.5KM,花3天才走到的杜巴广场',null),
(5,5,'seamou','img/hy/index/box5.jpeg',null,'已深度走访60国的新现实主义环球旅行者，战地（后）记者，近东和巴尔干音乐和文化采集者，国际电影节采访者及影评人，音乐节玩家，电影外景地收集人；在路上就是在上班，趁着旅行运和人品玩，抓紧深啃世界。','与藏族少年一起上珠峰',null);



-- INSERT INTO mfw_opus VALUES
-- (1,10,'曹栗羽','/img/hy/iindex/author-s-1.jpeg','img/hy/iindex/travels1.jpeg','以约 | 行走于历史与现代之间，不过过客而已','年少时期 ，对 以色列 的印象大多来源于历史课本，觉得这是一个战火纷飞的国度，也许是贫瘠的，也许是不幸的，也许是…… 而这些“也许是”，不过是狭隘的想象，被束缚的固有思想。 当我真正lalalalallalalallalal','以色列',2200,400,50),
-- (2,11,'shake','img/hy/iindex/author-s-2.jpeg','img/hy/iindex/travels2.jpg','一个人的半个月日本自由行~银山温泉，藏王温泉，北lallala','写在前面 为什么要自己一个人去 日本 呆大半个月呢？因为本来和朋友约好一起去的，机票酒店都定好了，结果她把我给飞机了，而且是临出发前一周飞机我的，我当时非常崩溃啊，自己一个人跑这lalallalal','日本',31777,150,25),
-- (3,12,'菁','img/hy/iindex/author-s-3.jpeg','img/hy/iindex/travels3.jpg','🌈See世界之～ 令和元年在霓虹 #東京、箱根lallal','因為愛，所以愛 ❤️那些年追過的劇， 其中一部就是《東京愛情故事》， 赤名莉香和永尾完治之間的愛情故事， 劇情雖已淡忘， ※主題曲《突如其來的愛情》， ※女主對男主表白時的甜美笑容😘...','东京',22458,65,963),
-- (4,13,'洪岩涩不是红颜','img/hy/iindex/author-s-4.jpeg','img/hy/iindex/travels4.jpg','「 下一站食觅达 」韩国饮食大盘点 | 地道韩国美食店lalala','你问我这段时间最想做什么？不如问我最想吃什么。 有什么烦恼是一顿美食解决不了的？那就吃两顿 ============================ 02.24更新：虽然交通运输已恢复，近期 韩国 新冠肺炎感染人数...llal','韩国',15455,52,789),
-- (5,14,'Eisha.H','img/hy/iindex/author-s-5.jpeg','img/hy/iindex/travels5.jpg','【环岛计划】14Days通关日本九州 『附离岛 - 屋久岛sjgn','【环岛计划】Kyushu Adventure - 2020 6年了，一成不变的是对旅行的挚爱，每段过往都刻画成了记忆深处最好的陪伴，这些我最爱的城市也见证了我的青春。或许是精神洁癖作祟迫使我还是会继续...','九州',85515,215,25),
-- (6,15,'大辉','img/hy/iindex/author-s-6.jpeg','img/hy/iindex/travels6.jpg','寻找隐藏在历史长河中的伟大艺术---安纳托利亚西部环kagkg','土耳其 ，位于安纳托利亚半岛，历史上在这片大陆上陆续出现过赫梯，特洛伊， 希腊 ， 罗马 ，拜占庭，奥斯曼等一系列耳熟能详的伟 大名 字。一直以来，心向往之，终于2019年6月，正值春末夏dggag','土耳其',21581,55,58),
-- (7,16,'Kris陈瑞瑞','img/hy/iindex/author-s-7.jpeg','img/hy/iindex/travels7.jpg','[Kris探秘南非]独自旅行，公共交通玩转南非（视频，克dgdgdgdff','来自大自然的呼唤 一个人去 南非 旅行，背着三个大小不一的三脚架，拉着2个行李箱，心里虽然慌张，依旧义无反顾的出发了。 虽然我曾也经质疑过自己的这个决定。在 南非 人生安全是没问题的...','南非',945512,255,52),
-- (8,17,'Erica的旅行手','img/hy/iindex/author-s-8.jpeg','img/hy/iindex/travels8.jpg','超小众墨西哥圆梦之旅 | 在尤卡坦半岛雨林攀上玛雅金','这是一篇关于 墨西哥 和玛雅遗迹探险的游记，记录了我在2019年国庆节在 墨西哥 的经历，这里有童话般的彩色小镇，也有人迹罕至的热带雨林，有人山人海的大众热门景点，也有绝对小众体验包场...','墨西哥',541255,21551,1213),
-- (9,18,'午餐盒LunchBox','img/hy/iindex/author-s-9.jpeg','img/hy/iindex/travels9.jpg','【出埃及记】北京老司机自驾『埃及』2600公里 | 最新','★ 写在前面的话 We are just passing by... 可企及的 非洲 大陆，是不是可以简单分为三部分，神秘的 北非 、生机勃勃的 中非 和与世界接轨的 南非 。除了从小听到的各种 埃及 未解之谜，情...','埃及',51231,548,56),
-- (10,19,'Kimi_Choo','img/hy/iindex/author-s-10.jpeg','img/hy/iindex/travels10.jpg','【Kimi＆越南】逃离寒冬，远赴越南拥抱夏日浪漫','前言 我想去 马尔代夫 的海边放松身心好好度个假！ 我想去浪漫的 巴黎 街头体验 欧洲 的风土人情！ 我想去 摩洛哥 走一走三毛书中的 撒哈拉沙漠 ！ 在邻国 越南 ，我万万没有想到，自己竟然...','越南',51235,6544,616);
