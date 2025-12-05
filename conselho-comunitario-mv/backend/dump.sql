CREATE DATABASE db_mv;

USE db_mv;

CREATE TABLE `user` (
	id_user INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(250),
    `password` VARCHAR(100)
);

CREATE TABLE news (
	id_news INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    `description` TEXT,
    posted DATE DEFAULT (CURRENT_DATE),
    id_user INT,
    
    FOREIGN KEY (id_user)
    REFERENCES `user` (id_user)
);

CREATE TABLE project (
    id_project INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(150),
    `days` VARCHAR(100),
    `start` INT,
    `end` INT,
    `location` VARCHAR(150),
    public VARCHAR(100),
    payment VARCHAR(100),
    responsible VARCHAR(100),
    phone VARCHAR(20),
    instagram VARCHAR(100),
    id_user INT,
    
    FOREIGN KEY (id_user)
    REFERENCES `user` (id_user)
);

-- ADMIN
INSERT INTO `user`(`name`, `password`) VALUES ('admin', 'admin');

-- PROJETOS
INSERT INTO project(`name`, `days`, `start`, `end`, `location`, public, payment, responsible, phone, instagram, id_user) VALUES
('Jiu Jitsu', 'Segunda à quinta', '19', '22', 'Sala em frente á secretaria do Centro Comunitário Monte Verde II', 'Crianças, jovens e Adultos', 'Direto com o professor', 'Fabiano', '48 99844-4332', '', '1'),
('Projeto Formiguinha', 'Segunda à quinta', '14', '17', 'Antiga portaria policial da dona Onil Ferreira', '', 'Gratuito', 'Ângela', '49 98418-7701', 'formiguinhas.mv', '1'),
('Bingo', 'Terças', '13', '17', 'Salão do Centro Comunitário Monte Verde', '', 'Gratuito', 'Dona Maria Castilho', '48 99115-9253', '', '1'),
('Capoeira', 'Terças e Quintas', '19', '22', 'Salão do Centro Comunitário Monte Verde', '', 'Gratuito', 'Mestre Dan', '48 99152-7069', '', '1'),
('FitDance', 'Terças e Quintas', '19', '22', 'Salão do Centro Comunitário Monte Verde', '', 'Gratuito', 'Mestre Dan', '48 99152-7069', '', '1'),
('Pilates com Vagner', 'Terças e Quintas', '7', '9', 'Centro Comunitário Monte Verde', '', 'Pagamento com professor', 'Vagner Amarante', '48 99947-7480', '', '1'),
('Pilates com Deyve', 'Terças e Quintas', '7', '9', 'No Salão do Centro Comunitário Monte Verde', '', 'Pagamento com professor', 'Deyve', '48 99947-7480', '', '1'),
('Balé', 'Segunda a Sexta', '13', '21', 'Sala em frente á secretaria do Centro Comunitário Monte Verde', '', 'Gratuito', 'Larissa', '48 99167-6110', '', '1'),
('Instituto Guga Kuerten', 'Quarta e Sexta', '8', '16', 'Salão do Centro Comunitário Monte Verde e quadra sintética', '', 'Pagamento com professor', 'Deyve', '48 99947-7480', 'institutogugakuerten', '1'),
('Programa Educacional PMF', 'Segunda a Sexta', '8', '19', 'Centro Comunitário Monte Verde e quadras', '', 'Gratuito', 'Latronico', '48 9635-4780', 'bairroeducador_monteverde', '1');

-- NOTICIAS
INSERT INTO news (title, description, id_user) VALUES
('Abertura de Novas Atividades', 'O Centro Comunitário Monte Verde anuncia a abertura de novas turmas de atividades esportivas e culturais. Inscrições estão abertas durante a semana.', 1),
('Manutenção na Quadra Sintética', 'Informamos que a quadra sintética estará interditada para manutenção entre os dias 10 e 14 deste mês. As aulas do projeto serão realocadas para o salão principal.', 1),
('Evento Especial: Dia da Comunidade', 'No próximo sábado ocorrerá o Dia da Comunidade, com apresentações dos projetos, brincadeiras e atividades abertas ao público. Participem!', 1),
('Aviso Importante: Recesso', 'Os projetos estarão em recesso entre os dias 20/12 e 05/01. Desejamos boas festas a todos!', 1),
('Nova Parceria Firmada', 'Foi firmada uma parceria com o Instituto Guga Kuerten para ampliar o acesso às atividades esportivas para crianças e adolescentes.', 1);