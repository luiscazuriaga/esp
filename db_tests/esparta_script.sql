--- Buscar os nomes de todos os alunos que frequentam alguma turma do professor 'JOAO PEDRO'.
SELECT
a.nome
FROM
	aluno a
INNER JOIN aluno_turma t 
    ON t.aluno_id = a.aluno_id
INNER JOIN turma r 
    ON t.turma_id = r.turma_id
--- Buscar os dias da semana que tenham aulas da disciplina 'MATEMATICA'.
SELECT
t.dia_da_semana
FROM
	turma t
INNER JOIN disciplina d 
    ON  d.id = t.DISCIPLINA_id
WHERE disciplina.nome = 'MATEMATICA' 
--- Buscar todos os alunos que frequentem aulas de 'MATEMATICA' e também 'FISICA'.
SELECT
a.nome
FROM
	aluno
INNER JOIN aluno_turma 
    ON aluno_turma.aluno_id = aluno.aluno_id
INNER JOIN turma 
    ON aluno_turma.turma_id = turma.id
INNER JOIN disciplina
    ON turma.DISCIPLINA_id = disciplina.id
WHERE disciplina.nome = 'MATEMATICA' AND 'FISICA'
--- Buscar as disciplinas que não tenham nenhuma turma.
SELECT
t.dia_da_semana
FROM
	turma
LEFT JOIN disciplina
    ON  disciplina.id = turma.DISCIPLINA_id
WHERE turma.id IS NULL
--- Buscar os alunos que frequentem aulas de 'MATEMATICA' exceto os que frequentem 'QUIMICA'.
SELECT
a.nome
FROM
	aluno
INNER JOIN aluno_turma 
    ON aluno_turma.aluno_id = aluno.aluno_id
INNER JOIN turma 
    ON aluno_turma.turma_id = turma.id
INNER JOIN disciplina
    ON turma.DISCIPLINA_id = disciplina.id
WHERE disciplina.nome = 'MATEMATICA' AND NOT 'QUIMICA'