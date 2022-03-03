import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cidade from 'App/Models/Cidade'
import Uf from 'App/Models/Uf'

export default class CidadeSeeder extends BaseSeeder {
  public async run() {
    await Uf.createMany([
      {
        uf: 'AC',
        nome: 'Acre',
      },
      {
        uf: 'AL',
        nome: 'Alagoas',
      },
      {
        uf: 'AM',
        nome: 'Amazonas',
      },
      {
        uf: 'AP',
        nome: 'Amapá',
      },
      {
        uf: 'BA',
        nome: 'Bahia',
      },
      {
        uf: 'CE',
        nome: 'Ceará',
      },
      {
        uf: 'DF',
        nome: 'Distrito Federal',
      },
      {
        uf: 'ES',
        nome: 'Espírito Santo',
      },
      {
        uf: 'GO',
        nome: 'Goiás',
      },
      {
        uf: 'MA',
        nome: 'Maranhão',
      },
      {
        uf: 'MG',
        nome: 'Minas Gerais',
      },
      {
        uf: 'MS',
        nome: 'Mato Grosso do Sul',
      },
      {
        uf: 'MT',
        nome: 'Mato Grosso',
      },
      {
        uf: 'PA',
        nome: 'Pará',
      },
      {
        uf: 'PB',
        nome: 'Paraíba',
      },
      {
        uf: 'PE',
        nome: 'Pernambuco',
      },
      {
        uf: 'PI',
        nome: 'Piauí',
      },
      {
        uf: 'PR',
        nome: 'Paraná',
      },
      {
        uf: 'RJ',
        nome: 'Rio de Janeiro',
      },
      {
        uf: 'RN',
        nome: 'Rio Grande do Norte',
      },
      {
        uf: 'RO',
        nome: 'Rondônia',
      },
      {
        uf: 'RR',
        nome: 'Roraima',
      },
      {
        uf: 'RS',
        nome: 'Rio Grande do Sul',
      },
      {
        uf: 'SC',
        nome: 'Santa Catarina',
      },
      {
        uf: 'SE',
        nome: 'Sergipe',
      },
      {
        uf: 'SP',
        nome: 'São Paulo',
      },
      {
        uf: 'TO',
        nome: 'Tocantins',
      },
    ])

    await Cidade.createMany([
      {
        cidade: 'Abadia de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Abadia dos Dourados',
        ufId: 11,
      },
      {
        cidade: 'Abadiânia',
        ufId: 9,
      },
      {
        cidade: 'Abaeté',
        ufId: 11,
      },
      {
        cidade: 'Abaetetuba',
        ufId: 14,
      },
      {
        cidade: 'Abaiara',
        ufId: 6,
      },
      {
        cidade: 'Abaíra',
        ufId: 5,
      },
      {
        cidade: 'Abaré',
        ufId: 5,
      },
      {
        cidade: 'Abatiá',
        ufId: 18,
      },
      {
        cidade: 'Abdon Batista',
        ufId: 24,
      },
      {
        cidade: 'Abel Figueiredo',
        ufId: 14,
      },
      {
        cidade: 'Abelardo Luz',
        ufId: 24,
      },
      {
        cidade: 'Abre Campo',
        ufId: 11,
      },
      {
        cidade: 'Abreu e Lima',
        ufId: 16,
      },
      {
        cidade: 'Abreulândia',
        ufId: 27,
      },
      {
        cidade: 'Acaiaca',
        ufId: 11,
      },
      {
        cidade: 'Açailândia',
        ufId: 10,
      },
      {
        cidade: 'Acajutiba',
        ufId: 5,
      },
      {
        cidade: 'Acará',
        ufId: 14,
      },
      {
        cidade: 'Acarape',
        ufId: 6,
      },
      {
        cidade: 'Acaraú',
        ufId: 6,
      },
      {
        cidade: 'Acari',
        ufId: 20,
      },
      {
        cidade: 'Acauã',
        ufId: 17,
      },
      {
        cidade: 'Aceguá',
        ufId: 23,
      },
      {
        cidade: 'Acopiara',
        ufId: 6,
      },
      {
        cidade: 'Acorizal',
        ufId: 13,
      },
      {
        cidade: 'Acrelândia',
        ufId: 1,
      },
      {
        cidade: 'Acreúna',
        ufId: 9,
      },
      {
        cidade: 'Açu',
        ufId: 20,
      },
      {
        cidade: 'Açucena',
        ufId: 11,
      },
      {
        cidade: 'Adamantina',
        ufId: 26,
      },
      {
        cidade: 'Adelândia',
        ufId: 9,
      },
      {
        cidade: 'Adolfo',
        ufId: 26,
      },
      {
        cidade: 'Adrianópolis',
        ufId: 18,
      },
      {
        cidade: 'Adustina',
        ufId: 5,
      },
      {
        cidade: 'Afogados da Ingazeira',
        ufId: 16,
      },
      {
        cidade: 'Afonso Bezerra',
        ufId: 20,
      },
      {
        cidade: 'Afonso Cláudio',
        ufId: 8,
      },
      {
        cidade: 'Afonso Cunha',
        ufId: 10,
      },
      {
        cidade: 'Afrânio',
        ufId: 16,
      },
      {
        cidade: 'Afuá',
        ufId: 14,
      },
      {
        cidade: 'Agrestina',
        ufId: 16,
      },
      {
        cidade: 'Agricolândia',
        ufId: 17,
      },
      {
        cidade: 'Agrolândia',
        ufId: 24,
      },
      {
        cidade: 'Agronômica',
        ufId: 24,
      },
      {
        cidade: 'Água Azul do Norte',
        ufId: 14,
      },
      {
        cidade: 'Água Boa',
        ufId: 11,
      },
      {
        cidade: 'Água Boa',
        ufId: 13,
      },
      {
        cidade: 'Água Branca',
        ufId: 17,
      },
      {
        cidade: 'Água Branca',
        ufId: 15,
      },
      {
        cidade: 'Água Branca',
        ufId: 2,
      },
      {
        cidade: 'Água Clara',
        ufId: 12,
      },
      {
        cidade: 'Água Comprida',
        ufId: 11,
      },
      {
        cidade: 'Água Doce',
        ufId: 24,
      },
      {
        cidade: 'Água Doce do Maranhão',
        ufId: 10,
      },
      {
        cidade: 'Água Doce do Norte',
        ufId: 8,
      },
      {
        cidade: 'Água Fria',
        ufId: 5,
      },
      {
        cidade: 'Água Fria de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Água Limpa',
        ufId: 9,
      },
      {
        cidade: 'Água Nova',
        ufId: 20,
      },
      {
        cidade: 'Água Preta',
        ufId: 16,
      },
      {
        cidade: 'Água Santa',
        ufId: 23,
      },
      {
        cidade: 'Aguaí',
        ufId: 26,
      },
      {
        cidade: 'Aguanil',
        ufId: 11,
      },
      {
        cidade: 'Águas Belas',
        ufId: 16,
      },
      {
        cidade: 'Águas da Prata',
        ufId: 26,
      },
      {
        cidade: 'Águas de Chapecó',
        ufId: 24,
      },
      {
        cidade: 'Águas de Lindóia',
        ufId: 26,
      },
      {
        cidade: 'Águas de Santa Bárbara',
        ufId: 26,
      },
      {
        cidade: 'Águas de São Pedro',
        ufId: 26,
      },
      {
        cidade: 'Águas Formosas',
        ufId: 11,
      },
      {
        cidade: 'Águas Frias',
        ufId: 24,
      },
      {
        cidade: 'Águas Lindas de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Águas Mornas',
        ufId: 24,
      },
      {
        cidade: 'Águas Vermelhas',
        ufId: 11,
      },
      {
        cidade: 'Agudo',
        ufId: 23,
      },
      {
        cidade: 'Agudos',
        ufId: 26,
      },
      {
        cidade: 'Agudos do Sul',
        ufId: 18,
      },
      {
        cidade: 'Águia Branca',
        ufId: 8,
      },
      {
        cidade: 'Aguiar',
        ufId: 15,
      },
      {
        cidade: 'Aguiarnópolis',
        ufId: 27,
      },
      {
        cidade: 'Aimorés',
        ufId: 11,
      },
      {
        cidade: 'Aiquara',
        ufId: 5,
      },
      {
        cidade: 'Aiuaba',
        ufId: 6,
      },
      {
        cidade: 'Aiuruoca',
        ufId: 11,
      },
      {
        cidade: 'Ajuricaba',
        ufId: 23,
      },
      {
        cidade: 'Alagoa',
        ufId: 11,
      },
      {
        cidade: 'Alagoa Grande',
        ufId: 15,
      },
      {
        cidade: 'Alagoa Nova',
        ufId: 15,
      },
      {
        cidade: 'Alagoinha',
        ufId: 15,
      },
      {
        cidade: 'Alagoinha',
        ufId: 16,
      },
      {
        cidade: 'Alagoinha do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Alagoinhas',
        ufId: 5,
      },
      {
        cidade: 'Alambari',
        ufId: 26,
      },
      {
        cidade: 'Albertina',
        ufId: 11,
      },
      {
        cidade: 'Alcântara',
        ufId: 10,
      },
      {
        cidade: 'Alcântaras',
        ufId: 6,
      },
      {
        cidade: 'Alcantil',
        ufId: 15,
      },
      {
        cidade: 'Alcinópolis',
        ufId: 12,
      },
      {
        cidade: 'Alcobaça',
        ufId: 5,
      },
      {
        cidade: 'Aldeias Altas',
        ufId: 10,
      },
      {
        cidade: 'Alecrim',
        ufId: 23,
      },
      {
        cidade: 'Alegre',
        ufId: 8,
      },
      {
        cidade: 'Alegrete',
        ufId: 23,
      },
      {
        cidade: 'Alegrete do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Alegria',
        ufId: 23,
      },
      {
        cidade: 'Além Paraíba',
        ufId: 11,
      },
      {
        cidade: 'Alenquer',
        ufId: 14,
      },
      {
        cidade: 'Alexandria',
        ufId: 20,
      },
      {
        cidade: 'Alexânia',
        ufId: 9,
      },
      {
        cidade: 'Alfenas',
        ufId: 11,
      },
      {
        cidade: 'Alfredo Chaves',
        ufId: 8,
      },
      {
        cidade: 'Alfredo Marcondes',
        ufId: 26,
      },
      {
        cidade: 'Alfredo Vasconcelos',
        ufId: 11,
      },
      {
        cidade: 'Alfredo Wagner',
        ufId: 24,
      },
      {
        cidade: 'Algodão de Jandaíra',
        ufId: 15,
      },
      {
        cidade: 'Alhandra',
        ufId: 15,
      },
      {
        cidade: 'Aliança',
        ufId: 16,
      },
      {
        cidade: 'Aliança do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Almadina',
        ufId: 5,
      },
      {
        cidade: 'Almas',
        ufId: 27,
      },
      {
        cidade: 'Almeirim',
        ufId: 14,
      },
      {
        cidade: 'Almenara',
        ufId: 11,
      },
      {
        cidade: 'Almino Afonso',
        ufId: 20,
      },
      {
        cidade: 'Almirante Tamandaré',
        ufId: 18,
      },
      {
        cidade: 'Almirante Tamandaré do Sul',
        ufId: 23,
      },
      {
        cidade: 'Aloândia',
        ufId: 9,
      },
      {
        cidade: 'Alpercata',
        ufId: 11,
      },
      {
        cidade: 'Alpestre',
        ufId: 23,
      },
      {
        cidade: 'Alpinópolis',
        ufId: 11,
      },
      {
        cidade: 'Alta Floresta',
        ufId: 13,
      },
      {
        cidade: "Alta Floresta D'Oeste",
        ufId: 21,
      },
      {
        cidade: 'Altair',
        ufId: 26,
      },
      {
        cidade: 'Altamira',
        ufId: 14,
      },
      {
        cidade: 'Altamira do Maranhão',
        ufId: 10,
      },
      {
        cidade: 'Altamira do Paraná',
        ufId: 18,
      },
      {
        cidade: 'Altaneira',
        ufId: 6,
      },
      {
        cidade: 'Alterosa',
        ufId: 11,
      },
      {
        cidade: 'Altinho',
        ufId: 16,
      },
      {
        cidade: 'Altinópolis',
        ufId: 26,
      },
      {
        cidade: 'Alto Alegre',
        ufId: 26,
      },
      {
        cidade: 'Alto Alegre',
        ufId: 22,
      },
      {
        cidade: 'Alto Alegre',
        ufId: 23,
      },
      {
        cidade: 'Alto Alegre do Maranhão',
        ufId: 10,
      },
      {
        cidade: 'Alto Alegre do Pindaré',
        ufId: 10,
      },
      {
        cidade: 'Alto Alegre dos Parecis',
        ufId: 21,
      },
      {
        cidade: 'Alto Araguaia',
        ufId: 13,
      },
      {
        cidade: 'Alto Bela Vista',
        ufId: 24,
      },
      {
        cidade: 'Alto Boa Vista',
        ufId: 13,
      },
      {
        cidade: 'Alto Caparaó',
        ufId: 11,
      },
      {
        cidade: 'Alto do Rodrigues',
        ufId: 20,
      },
      {
        cidade: 'Alto Feliz',
        ufId: 23,
      },
      {
        cidade: 'Alto Garças',
        ufId: 13,
      },
      {
        cidade: 'Alto Horizonte',
        ufId: 9,
      },
      {
        cidade: 'Alto Jequitibá',
        ufId: 11,
      },
      {
        cidade: 'Alto Longá',
        ufId: 17,
      },
      {
        cidade: 'Alto Paraguai',
        ufId: 13,
      },
      {
        cidade: 'Alto Paraíso',
        ufId: 18,
      },
      {
        cidade: 'Alto Paraíso',
        ufId: 21,
      },
      {
        cidade: 'Alto Paraíso de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Alto Paraná',
        ufId: 18,
      },
      {
        cidade: 'Alto Parnaíba',
        ufId: 10,
      },
      {
        cidade: 'Alto Piquiri',
        ufId: 18,
      },
      {
        cidade: 'Alto Rio Doce',
        ufId: 11,
      },
      {
        cidade: 'Alto Rio Novo',
        ufId: 8,
      },
      {
        cidade: 'Alto Santo',
        ufId: 6,
      },
      {
        cidade: 'Alto Taquari',
        ufId: 13,
      },
      {
        cidade: 'Altônia',
        ufId: 18,
      },
      {
        cidade: 'Altos',
        ufId: 17,
      },
      {
        cidade: 'Alumínio',
        ufId: 26,
      },
      {
        cidade: 'Alvarães',
        ufId: 3,
      },
      {
        cidade: 'Alvarenga',
        ufId: 11,
      },
      {
        cidade: 'Álvares Florence',
        ufId: 26,
      },
      {
        cidade: 'Álvares Machado',
        ufId: 26,
      },
      {
        cidade: 'Álvaro de Carvalho',
        ufId: 26,
      },
      {
        cidade: 'Alvinlândia',
        ufId: 26,
      },
      {
        cidade: 'Alvinópolis',
        ufId: 11,
      },
      {
        cidade: 'Alvorada',
        ufId: 27,
      },
      {
        cidade: 'Alvorada',
        ufId: 23,
      },
      {
        cidade: "Alvorada D'Oeste",
        ufId: 21,
      },
      {
        cidade: 'Alvorada de Minas',
        ufId: 11,
      },
      {
        cidade: 'Alvorada do Gurguéia',
        ufId: 17,
      },
      {
        cidade: 'Alvorada do Norte',
        ufId: 9,
      },
      {
        cidade: 'Alvorada do Sul',
        ufId: 18,
      },
      {
        cidade: 'Amajari',
        ufId: 22,
      },
      {
        cidade: 'Amambai',
        ufId: 12,
      },
      {
        cidade: 'Amapá',
        ufId: 4,
      },
      {
        cidade: 'Amapá do Maranhão',
        ufId: 10,
      },
      {
        cidade: 'Amaporã',
        ufId: 18,
      },
      {
        cidade: 'Amaraji',
        ufId: 16,
      },
      {
        cidade: 'Amaral Ferrador',
        ufId: 23,
      },
      {
        cidade: 'Amaralina',
        ufId: 9,
      },
      {
        cidade: 'Amarante',
        ufId: 17,
      },
      {
        cidade: 'Amarante do Maranhão',
        ufId: 10,
      },
      {
        cidade: 'Amargosa',
        ufId: 5,
      },
      {
        cidade: 'Amaturá',
        ufId: 3,
      },
      {
        cidade: 'Amélia Rodrigues',
        ufId: 5,
      },
      {
        cidade: 'América Dourada',
        ufId: 5,
      },
      {
        cidade: 'Americana',
        ufId: 26,
      },
      {
        cidade: 'Americano do Brasil',
        ufId: 9,
      },
      {
        cidade: 'Américo Brasiliense',
        ufId: 26,
      },
      {
        cidade: 'Américo de Campos',
        ufId: 26,
      },
      {
        cidade: 'Ametista do Sul',
        ufId: 23,
      },
      {
        cidade: 'Amontada',
        ufId: 6,
      },
      {
        cidade: 'Amorinópolis',
        ufId: 9,
      },
      {
        cidade: 'Amparo',
        ufId: 15,
      },
      {
        cidade: 'Amparo',
        ufId: 26,
      },
      {
        cidade: 'Amparo de São Francisco',
        ufId: 25,
      },
      {
        cidade: 'Amparo do Serra',
        ufId: 11,
      },
      {
        cidade: 'Ampére',
        ufId: 18,
      },
      {
        cidade: 'Anadia',
        ufId: 2,
      },
      {
        cidade: 'Anagé',
        ufId: 5,
      },
      {
        cidade: 'Anahy',
        ufId: 18,
      },
      {
        cidade: 'Anajás',
        ufId: 14,
      },
      {
        cidade: 'Anajatuba',
        ufId: 10,
      },
      {
        cidade: 'Analândia',
        ufId: 26,
      },
      {
        cidade: 'Anamã',
        ufId: 3,
      },
      {
        cidade: 'Ananás',
        ufId: 27,
      },
      {
        cidade: 'Ananindeua',
        ufId: 14,
      },
      {
        cidade: 'Anápolis',
        ufId: 9,
      },
      {
        cidade: 'Anapu',
        ufId: 14,
      },
      {
        cidade: 'Anapurus',
        ufId: 10,
      },
      {
        cidade: 'Anastácio',
        ufId: 12,
      },
      {
        cidade: 'Anaurilândia',
        ufId: 12,
      },
      {
        cidade: 'Anchieta',
        ufId: 24,
      },
      {
        cidade: 'Anchieta',
        ufId: 8,
      },
      {
        cidade: 'Andaraí',
        ufId: 5,
      },
      {
        cidade: 'Andirá',
        ufId: 18,
      },
      {
        cidade: 'Andorinha',
        ufId: 5,
      },
      {
        cidade: 'Andradas',
        ufId: 11,
      },
      {
        cidade: 'Andradina',
        ufId: 26,
      },
      {
        cidade: 'André da Rocha',
        ufId: 23,
      },
      {
        cidade: 'Andrelândia',
        ufId: 11,
      },
      {
        cidade: 'Angatuba',
        ufId: 26,
      },
      {
        cidade: 'Angelândia',
        ufId: 11,
      },
      {
        cidade: 'Angélica',
        ufId: 12,
      },
      {
        cidade: 'Angelim',
        ufId: 16,
      },
      {
        cidade: 'Angelina',
        ufId: 24,
      },
      {
        cidade: 'Angical',
        ufId: 5,
      },
      {
        cidade: 'Angical do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Angico',
        ufId: 27,
      },
      {
        cidade: 'Angicos',
        ufId: 20,
      },
      {
        cidade: 'Angra dos Reis',
        ufId: 19,
      },
      {
        cidade: 'Anguera',
        ufId: 5,
      },
      {
        cidade: 'Ângulo',
        ufId: 18,
      },
      {
        cidade: 'Anhanguera',
        ufId: 9,
      },
      {
        cidade: 'Anhembi',
        ufId: 26,
      },
      {
        cidade: 'Anhumas',
        ufId: 26,
      },
      {
        cidade: 'Anicuns',
        ufId: 9,
      },
      {
        cidade: 'Anísio de Abreu',
        ufId: 17,
      },
      {
        cidade: 'Anita Garibaldi',
        ufId: 24,
      },
      {
        cidade: 'Anitápolis',
        ufId: 24,
      },
      {
        cidade: 'Anori',
        ufId: 3,
      },
      {
        cidade: 'Anta Gorda',
        ufId: 23,
      },
      {
        cidade: 'Antas',
        ufId: 5,
      },
      {
        cidade: 'Antonina',
        ufId: 18,
      },
      {
        cidade: 'Antonina do Norte',
        ufId: 6,
      },
      {
        cidade: 'Antônio Almeida',
        ufId: 17,
      },
      {
        cidade: 'Antônio Cardoso',
        ufId: 5,
      },
      {
        cidade: 'Antônio Carlos',
        ufId: 24,
      },
      {
        cidade: 'Antônio Carlos',
        ufId: 11,
      },
      {
        cidade: 'Antônio Dias',
        ufId: 11,
      },
      {
        cidade: 'Antônio Gonçalves',
        ufId: 5,
      },
      {
        cidade: 'Antônio João',
        ufId: 12,
      },
      {
        cidade: 'Antônio Martins',
        ufId: 20,
      },
      {
        cidade: 'Antônio Olinto',
        ufId: 18,
      },
      {
        cidade: 'Antônio Prado',
        ufId: 23,
      },
      {
        cidade: 'Antônio Prado de Minas',
        ufId: 11,
      },
      {
        cidade: 'Aparecida',
        ufId: 15,
      },
      {
        cidade: 'Aparecida',
        ufId: 26,
      },
      {
        cidade: "Aparecida d'Oeste",
        ufId: 26,
      },
      {
        cidade: 'Aparecida de Goiânia',
        ufId: 9,
      },
      {
        cidade: 'Aparecida do Rio Doce',
        ufId: 9,
      },
      {
        cidade: 'Aparecida do Rio Negro',
        ufId: 27,
      },
      {
        cidade: 'Aparecida do Taboado',
        ufId: 12,
      },
      {
        cidade: 'Aperibé',
        ufId: 19,
      },
      {
        cidade: 'Apiacá',
        ufId: 8,
      },
      {
        cidade: 'Apiacás',
        ufId: 13,
      },
      {
        cidade: 'Apiaí',
        ufId: 26,
      },
      {
        cidade: 'Apicum-Açu',
        ufId: 10,
      },
      {
        cidade: 'Apiúna',
        ufId: 24,
      },
      {
        cidade: 'Apodi',
        ufId: 20,
      },
      {
        cidade: 'Aporá',
        ufId: 5,
      },
      {
        cidade: 'Aporé',
        ufId: 9,
      },
      {
        cidade: 'Apuarema',
        ufId: 5,
      },
      {
        cidade: 'Apucarana',
        ufId: 18,
      },
      {
        cidade: 'Apuí',
        ufId: 3,
      },
      {
        cidade: 'Apuiarés',
        ufId: 6,
      },
      {
        cidade: 'Aquidabã',
        ufId: 25,
      },
      {
        cidade: 'Aquidauana',
        ufId: 12,
      },
      {
        cidade: 'Aquiraz',
        ufId: 6,
      },
      {
        cidade: 'Arabutã',
        ufId: 24,
      },
      {
        cidade: 'Araçagi',
        ufId: 15,
      },
      {
        cidade: 'Araçaí',
        ufId: 11,
      },
      {
        cidade: 'Aracaju',
        ufId: 25,
      },
      {
        cidade: 'Araçariguama',
        ufId: 26,
      },
      {
        cidade: 'Araças',
        ufId: 5,
      },
      {
        cidade: 'Aracati',
        ufId: 6,
      },
      {
        cidade: 'Aracatu',
        ufId: 5,
      },
      {
        cidade: 'Araçatuba',
        ufId: 26,
      },
      {
        cidade: 'Araci',
        ufId: 5,
      },
      {
        cidade: 'Aracitaba',
        ufId: 11,
      },
      {
        cidade: 'Araçoiaba',
        ufId: 16,
      },
      {
        cidade: 'Aracoiaba',
        ufId: 6,
      },
      {
        cidade: 'Araçoiaba da Serra',
        ufId: 26,
      },
      {
        cidade: 'Aracruz',
        ufId: 8,
      },
      {
        cidade: 'Araçu',
        ufId: 9,
      },
      {
        cidade: 'Araçuaí',
        ufId: 11,
      },
      {
        cidade: 'Aragarças',
        ufId: 9,
      },
      {
        cidade: 'Aragoiânia',
        ufId: 9,
      },
      {
        cidade: 'Aragominas',
        ufId: 27,
      },
      {
        cidade: 'Araguacema',
        ufId: 27,
      },
      {
        cidade: 'Araguaçu',
        ufId: 27,
      },
      {
        cidade: 'Araguaiana',
        ufId: 13,
      },
      {
        cidade: 'Araguaína',
        ufId: 27,
      },
      {
        cidade: 'Araguainha',
        ufId: 13,
      },
      {
        cidade: 'Araguanã',
        ufId: 27,
      },
      {
        cidade: 'Araguanã',
        ufId: 10,
      },
      {
        cidade: 'Araguapaz',
        ufId: 9,
      },
      {
        cidade: 'Araguari',
        ufId: 11,
      },
      {
        cidade: 'Araguatins',
        ufId: 27,
      },
      {
        cidade: 'Araioses',
        ufId: 10,
      },
      {
        cidade: 'Aral Moreira',
        ufId: 12,
      },
      {
        cidade: 'Aramari',
        ufId: 5,
      },
      {
        cidade: 'Arambaré',
        ufId: 23,
      },
      {
        cidade: 'Arame',
        ufId: 10,
      },
      {
        cidade: 'Aramina',
        ufId: 26,
      },
      {
        cidade: 'Arandu',
        ufId: 26,
      },
      {
        cidade: 'Arantina',
        ufId: 11,
      },
      {
        cidade: 'Arapeí',
        ufId: 26,
      },
      {
        cidade: 'Arapiraca',
        ufId: 2,
      },
      {
        cidade: 'Arapoema',
        ufId: 27,
      },
      {
        cidade: 'Araponga',
        ufId: 11,
      },
      {
        cidade: 'Arapongas',
        ufId: 18,
      },
      {
        cidade: 'Araporã',
        ufId: 11,
      },
      {
        cidade: 'Arapoti',
        ufId: 18,
      },
      {
        cidade: 'Arapuã',
        ufId: 18,
      },
      {
        cidade: 'Arapuá',
        ufId: 11,
      },
      {
        cidade: 'Araputanga',
        ufId: 13,
      },
      {
        cidade: 'Araquari',
        ufId: 24,
      },
      {
        cidade: 'Arara',
        ufId: 15,
      },
      {
        cidade: 'Araranguá',
        ufId: 24,
      },
      {
        cidade: 'Araraquara',
        ufId: 26,
      },
      {
        cidade: 'Araras',
        ufId: 26,
      },
      {
        cidade: 'Ararendá',
        ufId: 6,
      },
      {
        cidade: 'Arari',
        ufId: 10,
      },
      {
        cidade: 'Araricá',
        ufId: 23,
      },
      {
        cidade: 'Araripe',
        ufId: 6,
      },
      {
        cidade: 'Araripina',
        ufId: 16,
      },
      {
        cidade: 'Araruama',
        ufId: 19,
      },
      {
        cidade: 'Araruna',
        ufId: 18,
      },
      {
        cidade: 'Araruna',
        ufId: 15,
      },
      {
        cidade: 'Arataca',
        ufId: 5,
      },
      {
        cidade: 'Aratiba',
        ufId: 23,
      },
      {
        cidade: 'Aratuba',
        ufId: 6,
      },
      {
        cidade: 'Aratuípe',
        ufId: 5,
      },
      {
        cidade: 'Arauá',
        ufId: 25,
      },
      {
        cidade: 'Araucária',
        ufId: 18,
      },
      {
        cidade: 'Araújos',
        ufId: 11,
      },
      {
        cidade: 'Araxá',
        ufId: 11,
      },
      {
        cidade: 'Arceburgo',
        ufId: 11,
      },
      {
        cidade: 'Arco-Íris',
        ufId: 26,
      },
      {
        cidade: 'Arcos',
        ufId: 11,
      },
      {
        cidade: 'Arcoverde',
        ufId: 16,
      },
      {
        cidade: 'Areado',
        ufId: 11,
      },
      {
        cidade: 'Areal',
        ufId: 19,
      },
      {
        cidade: 'Arealva',
        ufId: 26,
      },
      {
        cidade: 'Areia',
        ufId: 15,
      },
      {
        cidade: 'Areia Branca',
        ufId: 20,
      },
      {
        cidade: 'Areia Branca',
        ufId: 25,
      },
      {
        cidade: 'Areia de Baraúnas',
        ufId: 15,
      },
      {
        cidade: 'Areial',
        ufId: 15,
      },
      {
        cidade: 'Areias',
        ufId: 26,
      },
      {
        cidade: 'Areiópolis',
        ufId: 26,
      },
      {
        cidade: 'Arenápolis',
        ufId: 13,
      },
      {
        cidade: 'Arenópolis',
        ufId: 9,
      },
      {
        cidade: 'Arês',
        ufId: 20,
      },
      {
        cidade: 'Argirita',
        ufId: 11,
      },
      {
        cidade: 'Aricanduva',
        ufId: 11,
      },
      {
        cidade: 'Arinos',
        ufId: 11,
      },
      {
        cidade: 'Aripuanã',
        ufId: 13,
      },
      {
        cidade: 'Ariquemes',
        ufId: 21,
      },
      {
        cidade: 'Ariranha',
        ufId: 26,
      },
      {
        cidade: 'Ariranha do Ivaí',
        ufId: 18,
      },
      {
        cidade: 'Armação dos Búzios',
        ufId: 19,
      },
      {
        cidade: 'Armazém',
        ufId: 24,
      },
      {
        cidade: 'Arneiroz',
        ufId: 6,
      },
      {
        cidade: 'Aroazes',
        ufId: 17,
      },
      {
        cidade: 'Aroeiras',
        ufId: 15,
      },
      {
        cidade: 'Aroeiras do Itaim',
        ufId: 17,
      },
      {
        cidade: 'Arraial',
        ufId: 17,
      },
      {
        cidade: 'Arraial do Cabo',
        ufId: 19,
      },
      {
        cidade: 'Arraias',
        ufId: 27,
      },
      {
        cidade: 'Arroio do Meio',
        ufId: 23,
      },
      {
        cidade: 'Arroio do Padre',
        ufId: 23,
      },
      {
        cidade: 'Arroio do Sal',
        ufId: 23,
      },
      {
        cidade: 'Arroio do Tigre',
        ufId: 23,
      },
      {
        cidade: 'Arroio dos Ratos',
        ufId: 23,
      },
      {
        cidade: 'Arroio Grande',
        ufId: 23,
      },
      {
        cidade: 'Arroio Trinta',
        ufId: 24,
      },
      {
        cidade: 'Artur Nogueira',
        ufId: 26,
      },
      {
        cidade: 'Aruanã',
        ufId: 9,
      },
      {
        cidade: 'Arujá',
        ufId: 26,
      },
      {
        cidade: 'Arvoredo',
        ufId: 24,
      },
      {
        cidade: 'Arvorezinha',
        ufId: 23,
      },
      {
        cidade: 'Ascurra',
        ufId: 24,
      },
      {
        cidade: 'Aspásia',
        ufId: 26,
      },
      {
        cidade: 'Assaí',
        ufId: 18,
      },
      {
        cidade: 'Assaré',
        ufId: 6,
      },
      {
        cidade: 'Assis',
        ufId: 26,
      },
      {
        cidade: 'Assis Brasil',
        ufId: 1,
      },
      {
        cidade: 'Assis Chateaubriand',
        ufId: 18,
      },
      {
        cidade: 'Assunção',
        ufId: 15,
      },
      {
        cidade: 'Assunção do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Astolfo Dutra',
        ufId: 11,
      },
      {
        cidade: 'Astorga',
        ufId: 18,
      },
      {
        cidade: 'Atalaia',
        ufId: 18,
      },
      {
        cidade: 'Atalaia',
        ufId: 2,
      },
      {
        cidade: 'Atalaia do Norte',
        ufId: 3,
      },
      {
        cidade: 'Atalanta',
        ufId: 24,
      },
      {
        cidade: 'Ataléia',
        ufId: 11,
      },
      {
        cidade: 'Atibaia',
        ufId: 26,
      },
      {
        cidade: 'Atilio Vivacqua',
        ufId: 8,
      },
      {
        cidade: 'Augustinópolis',
        ufId: 27,
      },
      {
        cidade: 'Augusto Corrêa',
        ufId: 14,
      },
      {
        cidade: 'Augusto de Lima',
        ufId: 11,
      },
      {
        cidade: 'Augusto Pestana',
        ufId: 23,
      },
      {
        cidade: 'Augusto Severo (Campo Grande)',
        ufId: 20,
      },
      {
        cidade: 'Áurea',
        ufId: 23,
      },
      {
        cidade: 'Aurelino Leal',
        ufId: 5,
      },
      {
        cidade: 'Auriflama',
        ufId: 26,
      },
      {
        cidade: 'Aurilândia',
        ufId: 9,
      },
      {
        cidade: 'Aurora',
        ufId: 6,
      },
      {
        cidade: 'Aurora',
        ufId: 24,
      },
      {
        cidade: 'Aurora do Pará',
        ufId: 14,
      },
      {
        cidade: 'Aurora do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Autazes',
        ufId: 3,
      },
      {
        cidade: 'Avaí',
        ufId: 26,
      },
      {
        cidade: 'Avanhandava',
        ufId: 26,
      },
      {
        cidade: 'Avaré',
        ufId: 26,
      },
      {
        cidade: 'Aveiro',
        ufId: 14,
      },
      {
        cidade: 'Avelino Lopes',
        ufId: 17,
      },
      {
        cidade: 'Avelinópolis',
        ufId: 9,
      },
      {
        cidade: 'Axixá',
        ufId: 10,
      },
      {
        cidade: 'Axixá do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Babaçulândia',
        ufId: 27,
      },
      {
        cidade: 'Bacabal',
        ufId: 10,
      },
      {
        cidade: 'Bacabeira',
        ufId: 10,
      },
      {
        cidade: 'Bacuri',
        ufId: 10,
      },
      {
        cidade: 'Bacurituba',
        ufId: 10,
      },
      {
        cidade: 'Bady Bassitt',
        ufId: 26,
      },
      {
        cidade: 'Baependi',
        ufId: 11,
      },
      {
        cidade: 'Bagé',
        ufId: 23,
      },
      {
        cidade: 'Bagre',
        ufId: 14,
      },
      {
        cidade: 'Baía da Traição',
        ufId: 15,
      },
      {
        cidade: 'Baía Formosa',
        ufId: 20,
      },
      {
        cidade: 'Baianópolis',
        ufId: 5,
      },
      {
        cidade: 'Baião',
        ufId: 14,
      },
      {
        cidade: 'Baixa Grande',
        ufId: 5,
      },
      {
        cidade: 'Baixa Grande do Ribeiro',
        ufId: 17,
      },
      {
        cidade: 'Baixio',
        ufId: 6,
      },
      {
        cidade: 'Baixo Guandu',
        ufId: 8,
      },
      {
        cidade: 'Balbinos',
        ufId: 26,
      },
      {
        cidade: 'Baldim',
        ufId: 11,
      },
      {
        cidade: 'Baliza',
        ufId: 9,
      },
      {
        cidade: 'Balneário Arroio do Silva',
        ufId: 24,
      },
      {
        cidade: 'Balneário Barra do Sul',
        ufId: 24,
      },
      {
        cidade: 'Balneário Camboriú',
        ufId: 24,
      },
      {
        cidade: 'Balneário Gaivota',
        ufId: 24,
      },
      {
        cidade: 'Balneário Piçarras',
        ufId: 24,
      },
      {
        cidade: 'Balneário Pinhal',
        ufId: 23,
      },
      {
        cidade: 'Balneário Rincão',
        ufId: 24,
      },
      {
        cidade: 'Balsa Nova',
        ufId: 18,
      },
      {
        cidade: 'Bálsamo',
        ufId: 26,
      },
      {
        cidade: 'Balsas',
        ufId: 10,
      },
      {
        cidade: 'Bambuí',
        ufId: 11,
      },
      {
        cidade: 'Banabuiú',
        ufId: 6,
      },
      {
        cidade: 'Bananal',
        ufId: 26,
      },
      {
        cidade: 'Bananeiras',
        ufId: 15,
      },
      {
        cidade: 'Bandeira',
        ufId: 11,
      },
      {
        cidade: 'Bandeira do Sul',
        ufId: 11,
      },
      {
        cidade: 'Bandeirante',
        ufId: 24,
      },
      {
        cidade: 'Bandeirantes',
        ufId: 12,
      },
      {
        cidade: 'Bandeirantes',
        ufId: 18,
      },
      {
        cidade: 'Bandeirantes do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Bannach',
        ufId: 14,
      },
      {
        cidade: 'Banzaê',
        ufId: 5,
      },
      {
        cidade: 'Barão',
        ufId: 23,
      },
      {
        cidade: 'Barão de Antonina',
        ufId: 26,
      },
      {
        cidade: 'Barão de Cocais',
        ufId: 11,
      },
      {
        cidade: 'Barão de Cotegipe',
        ufId: 23,
      },
      {
        cidade: 'Barão de Grajaú',
        ufId: 10,
      },
      {
        cidade: 'Barão de Melgaço',
        ufId: 13,
      },
      {
        cidade: 'Barão de Monte Alto',
        ufId: 11,
      },
      {
        cidade: 'Barão do Triunfo',
        ufId: 23,
      },
      {
        cidade: 'Baraúna',
        ufId: 20,
      },
      {
        cidade: 'Baraúna',
        ufId: 15,
      },
      {
        cidade: 'Barbacena',
        ufId: 11,
      },
      {
        cidade: 'Barbalha',
        ufId: 6,
      },
      {
        cidade: 'Barbosa',
        ufId: 26,
      },
      {
        cidade: 'Barbosa Ferraz',
        ufId: 18,
      },
      {
        cidade: 'Barcarena',
        ufId: 14,
      },
      {
        cidade: 'Barcelona',
        ufId: 20,
      },
      {
        cidade: 'Barcelos',
        ufId: 3,
      },
      {
        cidade: 'Bariri',
        ufId: 26,
      },
      {
        cidade: 'Barra',
        ufId: 5,
      },
      {
        cidade: 'Barra Bonita',
        ufId: 24,
      },
      {
        cidade: 'Barra Bonita',
        ufId: 26,
      },
      {
        cidade: "Barra D'Alcântara",
        ufId: 17,
      },
      {
        cidade: 'Barra da Estiva',
        ufId: 5,
      },
      {
        cidade: 'Barra de Guabiraba',
        ufId: 16,
      },
      {
        cidade: 'Barra de Santa Rosa',
        ufId: 15,
      },
      {
        cidade: 'Barra de Santana',
        ufId: 15,
      },
      {
        cidade: 'Barra de Santo Antônio',
        ufId: 2,
      },
      {
        cidade: 'Barra de São Francisco',
        ufId: 8,
      },
      {
        cidade: 'Barra de São Miguel',
        ufId: 15,
      },
      {
        cidade: 'Barra de São Miguel',
        ufId: 2,
      },
      {
        cidade: 'Barra do Bugres',
        ufId: 13,
      },
      {
        cidade: 'Barra do Chapéu',
        ufId: 26,
      },
      {
        cidade: 'Barra do Choça',
        ufId: 5,
      },
      {
        cidade: 'Barra do Corda',
        ufId: 10,
      },
      {
        cidade: 'Barra do Garças',
        ufId: 13,
      },
      {
        cidade: 'Barra do Guarita',
        ufId: 23,
      },
      {
        cidade: 'Barra do Jacaré',
        ufId: 18,
      },
      {
        cidade: 'Barra do Mendes',
        ufId: 5,
      },
      {
        cidade: 'Barra do Ouro',
        ufId: 27,
      },
      {
        cidade: 'Barra do Piraí',
        ufId: 19,
      },
      {
        cidade: 'Barra do Quaraí',
        ufId: 23,
      },
      {
        cidade: 'Barra do Ribeiro',
        ufId: 23,
      },
      {
        cidade: 'Barra do Rio Azul',
        ufId: 23,
      },
      {
        cidade: 'Barra do Rocha',
        ufId: 5,
      },
      {
        cidade: 'Barra do Turvo',
        ufId: 26,
      },
      {
        cidade: 'Barra dos Coqueiros',
        ufId: 25,
      },
      {
        cidade: 'Barra Funda',
        ufId: 23,
      },
      {
        cidade: 'Barra Longa',
        ufId: 11,
      },
      {
        cidade: 'Barra Mansa',
        ufId: 19,
      },
      {
        cidade: 'Barra Velha',
        ufId: 24,
      },
      {
        cidade: 'Barracão',
        ufId: 23,
      },
      {
        cidade: 'Barracão',
        ufId: 18,
      },
      {
        cidade: 'Barras',
        ufId: 17,
      },
      {
        cidade: 'Barreira',
        ufId: 6,
      },
      {
        cidade: 'Barreiras',
        ufId: 5,
      },
      {
        cidade: 'Barreiras do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Barreirinha',
        ufId: 3,
      },
      {
        cidade: 'Barreirinhas',
        ufId: 10,
      },
      {
        cidade: 'Barreiros',
        ufId: 16,
      },
      {
        cidade: 'Barretos',
        ufId: 26,
      },
      {
        cidade: 'Barrinha',
        ufId: 26,
      },
      {
        cidade: 'Barro',
        ufId: 6,
      },
      {
        cidade: 'Barro Alto',
        ufId: 5,
      },
      {
        cidade: 'Barro Alto',
        ufId: 9,
      },
      {
        cidade: 'Barro Duro',
        ufId: 17,
      },
      {
        cidade: 'Barro Preto',
        ufId: 5,
      },
      {
        cidade: 'Barrocas',
        ufId: 5,
      },
      {
        cidade: 'Barrolândia',
        ufId: 27,
      },
      {
        cidade: 'Barroquinha',
        ufId: 6,
      },
      {
        cidade: 'Barros Cassal',
        ufId: 23,
      },
      {
        cidade: 'Barroso',
        ufId: 11,
      },
      {
        cidade: 'Barueri',
        ufId: 26,
      },
      {
        cidade: 'Bastos',
        ufId: 26,
      },
      {
        cidade: 'Bataguassu',
        ufId: 12,
      },
      {
        cidade: 'Batalha',
        ufId: 17,
      },
      {
        cidade: 'Batalha',
        ufId: 2,
      },
      {
        cidade: 'Batatais',
        ufId: 26,
      },
      {
        cidade: 'Batayporã',
        ufId: 12,
      },
      {
        cidade: 'Baturité',
        ufId: 6,
      },
      {
        cidade: 'Bauru',
        ufId: 26,
      },
      {
        cidade: 'Bayeux',
        ufId: 15,
      },
      {
        cidade: 'Bebedouro',
        ufId: 26,
      },
      {
        cidade: 'Beberibe',
        ufId: 6,
      },
      {
        cidade: 'Bela Cruz',
        ufId: 6,
      },
      {
        cidade: 'Bela Vista',
        ufId: 12,
      },
      {
        cidade: 'Bela Vista da Caroba',
        ufId: 18,
      },
      {
        cidade: 'Bela Vista de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Bela Vista de Minas',
        ufId: 11,
      },
      {
        cidade: 'Bela Vista do Maranhão',
        ufId: 10,
      },
      {
        cidade: 'Bela Vista do Paraíso',
        ufId: 18,
      },
      {
        cidade: 'Bela Vista do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Bela Vista do Toldo',
        ufId: 24,
      },
      {
        cidade: 'Belágua',
        ufId: 10,
      },
      {
        cidade: 'Belém',
        ufId: 14,
      },
      {
        cidade: 'Belém',
        ufId: 15,
      },
      {
        cidade: 'Belém',
        ufId: 2,
      },
      {
        cidade: 'Belém de Maria',
        ufId: 16,
      },
      {
        cidade: 'Belém do Brejo do Cruz',
        ufId: 15,
      },
      {
        cidade: 'Belém do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Belém do São Francisco',
        ufId: 16,
      },
      {
        cidade: 'Belford Roxo',
        ufId: 19,
      },
      {
        cidade: 'Belmiro Braga',
        ufId: 11,
      },
      {
        cidade: 'Belmonte',
        ufId: 24,
      },
      {
        cidade: 'Belmonte',
        ufId: 5,
      },
      {
        cidade: 'Belo Campo',
        ufId: 5,
      },
      {
        cidade: 'Belo Horizonte',
        ufId: 11,
      },
      {
        cidade: 'Belo Jardim',
        ufId: 16,
      },
      {
        cidade: 'Belo Monte',
        ufId: 2,
      },
      {
        cidade: 'Belo Oriente',
        ufId: 11,
      },
      {
        cidade: 'Belo Vale',
        ufId: 11,
      },
      {
        cidade: 'Belterra',
        ufId: 14,
      },
      {
        cidade: 'Beneditinos',
        ufId: 17,
      },
      {
        cidade: 'Benedito Leite',
        ufId: 10,
      },
      {
        cidade: 'Benedito Novo',
        ufId: 24,
      },
      {
        cidade: 'Benevides',
        ufId: 14,
      },
      {
        cidade: 'Benjamin Constant',
        ufId: 3,
      },
      {
        cidade: 'Benjamin Constant do Sul',
        ufId: 23,
      },
      {
        cidade: 'Bento de Abreu',
        ufId: 26,
      },
      {
        cidade: 'Bento Fernandes',
        ufId: 20,
      },
      {
        cidade: 'Bento Gonçalves',
        ufId: 23,
      },
      {
        cidade: 'Bequimão',
        ufId: 10,
      },
      {
        cidade: 'Berilo',
        ufId: 11,
      },
      {
        cidade: 'Berizal',
        ufId: 11,
      },
      {
        cidade: 'Bernardino Batista',
        ufId: 15,
      },
      {
        cidade: 'Bernardino de Campos',
        ufId: 26,
      },
      {
        cidade: 'Bernardo do Mearim',
        ufId: 10,
      },
      {
        cidade: 'Bernardo Sayão',
        ufId: 27,
      },
      {
        cidade: 'Bertioga',
        ufId: 26,
      },
      {
        cidade: 'Bertolínia',
        ufId: 17,
      },
      {
        cidade: 'Bertópolis',
        ufId: 11,
      },
      {
        cidade: 'Beruri',
        ufId: 3,
      },
      {
        cidade: 'Betânia',
        ufId: 16,
      },
      {
        cidade: 'Betânia do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Betim',
        ufId: 11,
      },
      {
        cidade: 'Bezerros',
        ufId: 16,
      },
      {
        cidade: 'Bias Fortes',
        ufId: 11,
      },
      {
        cidade: 'Bicas',
        ufId: 11,
      },
      {
        cidade: 'Biguaçu',
        ufId: 24,
      },
      {
        cidade: 'Bilac',
        ufId: 26,
      },
      {
        cidade: 'Biquinhas',
        ufId: 11,
      },
      {
        cidade: 'Birigui',
        ufId: 26,
      },
      {
        cidade: 'Biritiba-Mirim',
        ufId: 26,
      },
      {
        cidade: 'Biritinga',
        ufId: 5,
      },
      {
        cidade: 'Bituruna',
        ufId: 18,
      },
      {
        cidade: 'Blumenau',
        ufId: 24,
      },
      {
        cidade: 'Boa Esperança',
        ufId: 18,
      },
      {
        cidade: 'Boa Esperança',
        ufId: 11,
      },
      {
        cidade: 'Boa Esperança',
        ufId: 8,
      },
      {
        cidade: 'Boa Esperança do Iguaçu',
        ufId: 18,
      },
      {
        cidade: 'Boa Esperança do Sul',
        ufId: 26,
      },
      {
        cidade: 'Boa Hora',
        ufId: 17,
      },
      {
        cidade: 'Boa Nova',
        ufId: 5,
      },
      {
        cidade: 'Boa Ventura',
        ufId: 15,
      },
      {
        cidade: 'Boa Ventura de São Roque',
        ufId: 18,
      },
      {
        cidade: 'Boa Viagem',
        ufId: 6,
      },
      {
        cidade: 'Boa Vista',
        ufId: 22,
      },
      {
        cidade: 'Boa Vista',
        ufId: 15,
      },
      {
        cidade: 'Boa Vista da Aparecida',
        ufId: 18,
      },
      {
        cidade: 'Boa Vista das Missões',
        ufId: 23,
      },
      {
        cidade: 'Boa Vista do Buricá',
        ufId: 23,
      },
      {
        cidade: 'Boa Vista do Cadeado',
        ufId: 23,
      },
      {
        cidade: 'Boa Vista do Gurupi',
        ufId: 10,
      },
      {
        cidade: 'Boa Vista do Incra',
        ufId: 23,
      },
      {
        cidade: 'Boa Vista do Ramos',
        ufId: 3,
      },
      {
        cidade: 'Boa Vista do Sul',
        ufId: 23,
      },
      {
        cidade: 'Boa Vista do Tupim',
        ufId: 5,
      },
      {
        cidade: 'Boca da Mata',
        ufId: 2,
      },
      {
        cidade: 'Boca do Acre',
        ufId: 3,
      },
      {
        cidade: 'Bocaina',
        ufId: 17,
      },
      {
        cidade: 'Bocaina',
        ufId: 26,
      },
      {
        cidade: 'Bocaina de Minas',
        ufId: 11,
      },
      {
        cidade: 'Bocaina do Sul',
        ufId: 24,
      },
      {
        cidade: 'Bocaiúva',
        ufId: 11,
      },
      {
        cidade: 'Bocaiúva do Sul',
        ufId: 18,
      },
      {
        cidade: 'Bodó',
        ufId: 20,
      },
      {
        cidade: 'Bodocó',
        ufId: 16,
      },
      {
        cidade: 'Bodoquena',
        ufId: 12,
      },
      {
        cidade: 'Bofete',
        ufId: 26,
      },
      {
        cidade: 'Boituva',
        ufId: 26,
      },
      {
        cidade: 'Bom Conselho',
        ufId: 16,
      },
      {
        cidade: 'Bom Despacho',
        ufId: 11,
      },
      {
        cidade: 'Bom Jardim',
        ufId: 19,
      },
      {
        cidade: 'Bom Jardim',
        ufId: 16,
      },
      {
        cidade: 'Bom Jardim',
        ufId: 10,
      },
      {
        cidade: 'Bom Jardim da Serra',
        ufId: 24,
      },
      {
        cidade: 'Bom Jardim de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Bom Jardim de Minas',
        ufId: 11,
      },
      {
        cidade: 'Bom Jesus',
        ufId: 24,
      },
      {
        cidade: 'Bom Jesus',
        ufId: 23,
      },
      {
        cidade: 'Bom Jesus',
        ufId: 17,
      },
      {
        cidade: 'Bom Jesus',
        ufId: 20,
      },
      {
        cidade: 'Bom Jesus',
        ufId: 15,
      },
      {
        cidade: 'Bom Jesus da Lapa',
        ufId: 5,
      },
      {
        cidade: 'Bom Jesus da Penha',
        ufId: 11,
      },
      {
        cidade: 'Bom Jesus da Serra',
        ufId: 5,
      },
      {
        cidade: 'Bom Jesus das Selvas',
        ufId: 10,
      },
      {
        cidade: 'Bom Jesus de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Bom Jesus do Amparo',
        ufId: 11,
      },
      {
        cidade: 'Bom Jesus do Araguaia',
        ufId: 13,
      },
      {
        cidade: 'Bom Jesus do Galho',
        ufId: 11,
      },
      {
        cidade: 'Bom Jesus do Itabapoana',
        ufId: 19,
      },
      {
        cidade: 'Bom Jesus do Norte',
        ufId: 8,
      },
      {
        cidade: 'Bom Jesus do Oeste',
        ufId: 24,
      },
      {
        cidade: 'Bom Jesus do Sul',
        ufId: 18,
      },
      {
        cidade: 'Bom Jesus do Tocantins',
        ufId: 14,
      },
      {
        cidade: 'Bom Jesus do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Bom Jesus dos Perdões',
        ufId: 26,
      },
      {
        cidade: 'Bom Lugar',
        ufId: 10,
      },
      {
        cidade: 'Bom Princípio',
        ufId: 23,
      },
      {
        cidade: 'Bom Princípio do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Bom Progresso',
        ufId: 23,
      },
      {
        cidade: 'Bom Repouso',
        ufId: 11,
      },
      {
        cidade: 'Bom Retiro',
        ufId: 24,
      },
      {
        cidade: 'Bom Retiro do Sul',
        ufId: 23,
      },
      {
        cidade: 'Bom Sucesso',
        ufId: 11,
      },
      {
        cidade: 'Bom Sucesso',
        ufId: 18,
      },
      {
        cidade: 'Bom Sucesso',
        ufId: 15,
      },
      {
        cidade: 'Bom Sucesso de Itararé',
        ufId: 26,
      },
      {
        cidade: 'Bom Sucesso do Sul',
        ufId: 18,
      },
      {
        cidade: 'Bombinhas',
        ufId: 24,
      },
      {
        cidade: 'Bonfim',
        ufId: 22,
      },
      {
        cidade: 'Bonfim',
        ufId: 11,
      },
      {
        cidade: 'Bonfim do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Bonfinópolis',
        ufId: 9,
      },
      {
        cidade: 'Bonfinópolis de Minas',
        ufId: 11,
      },
      {
        cidade: 'Boninal',
        ufId: 5,
      },
      {
        cidade: 'Bonito',
        ufId: 16,
      },
      {
        cidade: 'Bonito',
        ufId: 5,
      },
      {
        cidade: 'Bonito',
        ufId: 14,
      },
      {
        cidade: 'Bonito',
        ufId: 12,
      },
      {
        cidade: 'Bonito de Minas',
        ufId: 11,
      },
      {
        cidade: 'Bonito de Santa Fé',
        ufId: 15,
      },
      {
        cidade: 'Bonópolis',
        ufId: 9,
      },
      {
        cidade: 'Boqueirão',
        ufId: 15,
      },
      {
        cidade: 'Boqueirão do Leão',
        ufId: 23,
      },
      {
        cidade: 'Boqueirão do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Boquim',
        ufId: 25,
      },
      {
        cidade: 'Boquira',
        ufId: 5,
      },
      {
        cidade: 'Borá',
        ufId: 26,
      },
      {
        cidade: 'Boracéia',
        ufId: 26,
      },
      {
        cidade: 'Borba',
        ufId: 3,
      },
      {
        cidade: 'Borborema',
        ufId: 15,
      },
      {
        cidade: 'Borborema',
        ufId: 26,
      },
      {
        cidade: 'Borda da Mata',
        ufId: 11,
      },
      {
        cidade: 'Borebi',
        ufId: 26,
      },
      {
        cidade: 'Borrazópolis',
        ufId: 18,
      },
      {
        cidade: 'Bossoroca',
        ufId: 23,
      },
      {
        cidade: 'Botelhos',
        ufId: 11,
      },
      {
        cidade: 'Botucatu',
        ufId: 26,
      },
      {
        cidade: 'Botumirim',
        ufId: 11,
      },
      {
        cidade: 'Botuporã',
        ufId: 5,
      },
      {
        cidade: 'Botuverá',
        ufId: 24,
      },
      {
        cidade: 'Bozano',
        ufId: 23,
      },
      {
        cidade: 'Braço do Norte',
        ufId: 24,
      },
      {
        cidade: 'Braço do Trombudo',
        ufId: 24,
      },
      {
        cidade: 'Braga',
        ufId: 23,
      },
      {
        cidade: 'Bragança',
        ufId: 14,
      },
      {
        cidade: 'Bragança Paulista',
        ufId: 26,
      },
      {
        cidade: 'Braganey',
        ufId: 18,
      },
      {
        cidade: 'Branquinha',
        ufId: 2,
      },
      {
        cidade: 'Brás Pires',
        ufId: 11,
      },
      {
        cidade: 'Brasil Novo',
        ufId: 14,
      },
      {
        cidade: 'Brasilândia',
        ufId: 12,
      },
      {
        cidade: 'Brasilândia de Minas',
        ufId: 11,
      },
      {
        cidade: 'Brasilândia do Sul',
        ufId: 18,
      },
      {
        cidade: 'Brasilândia do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Brasiléia',
        ufId: 1,
      },
      {
        cidade: 'Brasileira',
        ufId: 17,
      },
      {
        cidade: 'Brasília',
        ufId: 7,
      },
      {
        cidade: 'Brasília de Minas',
        ufId: 11,
      },
      {
        cidade: 'Brasnorte',
        ufId: 13,
      },
      {
        cidade: 'Braúna',
        ufId: 26,
      },
      {
        cidade: 'Braúnas',
        ufId: 11,
      },
      {
        cidade: 'Brazabrantes',
        ufId: 9,
      },
      {
        cidade: 'Brazópolis',
        ufId: 11,
      },
      {
        cidade: 'Brejão',
        ufId: 16,
      },
      {
        cidade: 'Brejetuba',
        ufId: 8,
      },
      {
        cidade: 'Brejinho',
        ufId: 20,
      },
      {
        cidade: 'Brejinho',
        ufId: 16,
      },
      {
        cidade: 'Brejinho de Nazaré',
        ufId: 27,
      },
      {
        cidade: 'Brejo',
        ufId: 10,
      },
      {
        cidade: 'Brejo Alegre',
        ufId: 26,
      },
      {
        cidade: 'Brejo da Madre de Deus',
        ufId: 16,
      },
      {
        cidade: 'Brejo de Areia',
        ufId: 10,
      },
      {
        cidade: 'Brejo do Cruz',
        ufId: 15,
      },
      {
        cidade: 'Brejo do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Brejo dos Santos',
        ufId: 15,
      },
      {
        cidade: 'Brejo Grande',
        ufId: 25,
      },
      {
        cidade: 'Brejo Grande do Araguaia',
        ufId: 14,
      },
      {
        cidade: 'Brejo Santo',
        ufId: 6,
      },
      {
        cidade: 'Brejões',
        ufId: 5,
      },
      {
        cidade: 'Brejolândia',
        ufId: 5,
      },
      {
        cidade: 'Breu Branco',
        ufId: 14,
      },
      {
        cidade: 'Breves',
        ufId: 14,
      },
      {
        cidade: 'Britânia',
        ufId: 9,
      },
      {
        cidade: 'Brochier',
        ufId: 23,
      },
      {
        cidade: 'Brodowski',
        ufId: 26,
      },
      {
        cidade: 'Brotas',
        ufId: 26,
      },
      {
        cidade: 'Brotas de Macaúbas',
        ufId: 5,
      },
      {
        cidade: 'Brumadinho',
        ufId: 11,
      },
      {
        cidade: 'Brumado',
        ufId: 5,
      },
      {
        cidade: 'Brunópolis',
        ufId: 24,
      },
      {
        cidade: 'Brusque',
        ufId: 24,
      },
      {
        cidade: 'Bueno Brandão',
        ufId: 11,
      },
      {
        cidade: 'Buenópolis',
        ufId: 11,
      },
      {
        cidade: 'Buenos Aires',
        ufId: 16,
      },
      {
        cidade: 'Buerarema',
        ufId: 5,
      },
      {
        cidade: 'Bugre',
        ufId: 11,
      },
      {
        cidade: 'Buíque',
        ufId: 16,
      },
      {
        cidade: 'Bujari',
        ufId: 1,
      },
      {
        cidade: 'Bujaru',
        ufId: 14,
      },
      {
        cidade: 'Buri',
        ufId: 26,
      },
      {
        cidade: 'Buritama',
        ufId: 26,
      },
      {
        cidade: 'Buriti',
        ufId: 10,
      },
      {
        cidade: 'Buriti Alegre',
        ufId: 9,
      },
      {
        cidade: 'Buriti Bravo',
        ufId: 10,
      },
      {
        cidade: 'Buriti de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Buriti do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Buriti dos Lopes',
        ufId: 17,
      },
      {
        cidade: 'Buriti dos Montes',
        ufId: 17,
      },
      {
        cidade: 'Buriticupu',
        ufId: 10,
      },
      {
        cidade: 'Buritinópolis',
        ufId: 9,
      },
      {
        cidade: 'Buritirama',
        ufId: 5,
      },
      {
        cidade: 'Buritirana',
        ufId: 10,
      },
      {
        cidade: 'Buritis',
        ufId: 21,
      },
      {
        cidade: 'Buritis',
        ufId: 11,
      },
      {
        cidade: 'Buritizal',
        ufId: 26,
      },
      {
        cidade: 'Buritizeiro',
        ufId: 11,
      },
      {
        cidade: 'Butiá',
        ufId: 23,
      },
      {
        cidade: 'Caapiranga',
        ufId: 3,
      },
      {
        cidade: 'Caaporã',
        ufId: 15,
      },
      {
        cidade: 'Caarapó',
        ufId: 12,
      },
      {
        cidade: 'Caatiba',
        ufId: 5,
      },
      {
        cidade: 'Cabaceiras',
        ufId: 15,
      },
      {
        cidade: 'Cabaceiras do Paraguaçu',
        ufId: 5,
      },
      {
        cidade: 'Cabeceira Grande',
        ufId: 11,
      },
      {
        cidade: 'Cabeceiras',
        ufId: 9,
      },
      {
        cidade: 'Cabeceiras do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Cabedelo',
        ufId: 15,
      },
      {
        cidade: 'Cabixi',
        ufId: 21,
      },
      {
        cidade: 'Cabo de Santo Agostinho',
        ufId: 16,
      },
      {
        cidade: 'Cabo Frio',
        ufId: 19,
      },
      {
        cidade: 'Cabo Verde',
        ufId: 11,
      },
      {
        cidade: 'Cabrália Paulista',
        ufId: 26,
      },
      {
        cidade: 'Cabreúva',
        ufId: 26,
      },
      {
        cidade: 'Cabrobó',
        ufId: 16,
      },
      {
        cidade: 'Caçador',
        ufId: 24,
      },
      {
        cidade: 'Caçapava',
        ufId: 26,
      },
      {
        cidade: 'Caçapava do Sul',
        ufId: 23,
      },
      {
        cidade: 'Cacaulândia',
        ufId: 21,
      },
      {
        cidade: 'Cacequi',
        ufId: 23,
      },
      {
        cidade: 'Cáceres',
        ufId: 13,
      },
      {
        cidade: 'Cachoeira',
        ufId: 5,
      },
      {
        cidade: 'Cachoeira Alta',
        ufId: 9,
      },
      {
        cidade: 'Cachoeira da Prata',
        ufId: 11,
      },
      {
        cidade: 'Cachoeira de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Cachoeira de Minas',
        ufId: 11,
      },
      {
        cidade: 'Cachoeira de Pajeú',
        ufId: 11,
      },
      {
        cidade: 'Cachoeira do Arari',
        ufId: 14,
      },
      {
        cidade: 'Cachoeira do Piriá',
        ufId: 14,
      },
      {
        cidade: 'Cachoeira do Sul',
        ufId: 23,
      },
      {
        cidade: 'Cachoeira dos Índios',
        ufId: 15,
      },
      {
        cidade: 'Cachoeira Dourada',
        ufId: 9,
      },
      {
        cidade: 'Cachoeira Dourada',
        ufId: 11,
      },
      {
        cidade: 'Cachoeira Grande',
        ufId: 10,
      },
      {
        cidade: 'Cachoeira Paulista',
        ufId: 26,
      },
      {
        cidade: 'Cachoeiras de Macacu',
        ufId: 19,
      },
      {
        cidade: 'Cachoeirinha',
        ufId: 27,
      },
      {
        cidade: 'Cachoeirinha',
        ufId: 16,
      },
      {
        cidade: 'Cachoeirinha',
        ufId: 23,
      },
      {
        cidade: 'Cachoeiro de Itapemirim',
        ufId: 8,
      },
      {
        cidade: 'Cacimba de Areia',
        ufId: 15,
      },
      {
        cidade: 'Cacimba de Dentro',
        ufId: 15,
      },
      {
        cidade: 'Cacimbas',
        ufId: 15,
      },
      {
        cidade: 'Cacimbinhas',
        ufId: 2,
      },
      {
        cidade: 'Cacique Doble',
        ufId: 23,
      },
      {
        cidade: 'Cacoal',
        ufId: 21,
      },
      {
        cidade: 'Caconde',
        ufId: 26,
      },
      {
        cidade: 'Caçu',
        ufId: 9,
      },
      {
        cidade: 'Caculé',
        ufId: 5,
      },
      {
        cidade: 'Caém',
        ufId: 5,
      },
      {
        cidade: 'Caetanópolis',
        ufId: 11,
      },
      {
        cidade: 'Caetanos',
        ufId: 5,
      },
      {
        cidade: 'Caeté',
        ufId: 11,
      },
      {
        cidade: 'Caetés',
        ufId: 16,
      },
      {
        cidade: 'Caetité',
        ufId: 5,
      },
      {
        cidade: 'Cafarnaum',
        ufId: 5,
      },
      {
        cidade: 'Cafeara',
        ufId: 18,
      },
      {
        cidade: 'Cafelândia',
        ufId: 26,
      },
      {
        cidade: 'Cafelândia',
        ufId: 18,
      },
      {
        cidade: 'Cafezal do Sul',
        ufId: 18,
      },
      {
        cidade: 'Caiabu',
        ufId: 26,
      },
      {
        cidade: 'Caiana',
        ufId: 11,
      },
      {
        cidade: 'Caiapônia',
        ufId: 9,
      },
      {
        cidade: 'Caibaté',
        ufId: 23,
      },
      {
        cidade: 'Caibi',
        ufId: 24,
      },
      {
        cidade: 'Caiçara',
        ufId: 23,
      },
      {
        cidade: 'Caiçara',
        ufId: 15,
      },
      {
        cidade: 'Caiçara do Norte',
        ufId: 20,
      },
      {
        cidade: 'Caiçara do Rio do Vento',
        ufId: 20,
      },
      {
        cidade: 'Caicó',
        ufId: 20,
      },
      {
        cidade: 'Caieiras',
        ufId: 26,
      },
      {
        cidade: 'Cairu',
        ufId: 5,
      },
      {
        cidade: 'Caiuá',
        ufId: 26,
      },
      {
        cidade: 'Cajamar',
        ufId: 26,
      },
      {
        cidade: 'Cajapió',
        ufId: 10,
      },
      {
        cidade: 'Cajari',
        ufId: 10,
      },
      {
        cidade: 'Cajati',
        ufId: 26,
      },
      {
        cidade: 'Cajazeiras',
        ufId: 15,
      },
      {
        cidade: 'Cajazeiras do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Cajazeirinhas',
        ufId: 15,
      },
      {
        cidade: 'Cajobi',
        ufId: 26,
      },
      {
        cidade: 'Cajueiro',
        ufId: 2,
      },
      {
        cidade: 'Cajueiro da Praia',
        ufId: 17,
      },
      {
        cidade: 'Cajuri',
        ufId: 11,
      },
      {
        cidade: 'Cajuru',
        ufId: 26,
      },
      {
        cidade: 'Calçado',
        ufId: 16,
      },
      {
        cidade: 'Calçoene',
        ufId: 4,
      },
      {
        cidade: 'Caldas',
        ufId: 11,
      },
      {
        cidade: 'Caldas Brandão',
        ufId: 15,
      },
      {
        cidade: 'Caldas Novas',
        ufId: 9,
      },
      {
        cidade: 'Caldazinha',
        ufId: 9,
      },
      {
        cidade: 'Caldeirão Grande',
        ufId: 5,
      },
      {
        cidade: 'Caldeirão Grande do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Califórnia',
        ufId: 18,
      },
      {
        cidade: 'Calmon',
        ufId: 24,
      },
      {
        cidade: 'Calumbi',
        ufId: 16,
      },
      {
        cidade: 'Camacan',
        ufId: 5,
      },
      {
        cidade: 'Camaçari',
        ufId: 5,
      },
      {
        cidade: 'Camacho',
        ufId: 11,
      },
      {
        cidade: 'Camalaú',
        ufId: 15,
      },
      {
        cidade: 'Camamu',
        ufId: 5,
      },
      {
        cidade: 'Camanducaia',
        ufId: 11,
      },
      {
        cidade: 'Camapuã',
        ufId: 12,
      },
      {
        cidade: 'Camaquã',
        ufId: 23,
      },
      {
        cidade: 'Camaragibe',
        ufId: 16,
      },
      {
        cidade: 'Camargo',
        ufId: 23,
      },
      {
        cidade: 'Cambará',
        ufId: 18,
      },
      {
        cidade: 'Cambará do Sul',
        ufId: 23,
      },
      {
        cidade: 'Cambé',
        ufId: 18,
      },
      {
        cidade: 'Cambira',
        ufId: 18,
      },
      {
        cidade: 'Camboriú',
        ufId: 24,
      },
      {
        cidade: 'Cambuci',
        ufId: 19,
      },
      {
        cidade: 'Cambuí',
        ufId: 11,
      },
      {
        cidade: 'Cambuquira',
        ufId: 11,
      },
      {
        cidade: 'Cametá',
        ufId: 14,
      },
      {
        cidade: 'Camocim',
        ufId: 6,
      },
      {
        cidade: 'Camocim de São Félix',
        ufId: 16,
      },
      {
        cidade: 'Campanário',
        ufId: 11,
      },
      {
        cidade: 'Campanha',
        ufId: 11,
      },
      {
        cidade: 'Campestre',
        ufId: 11,
      },
      {
        cidade: 'Campestre',
        ufId: 2,
      },
      {
        cidade: 'Campestre da Serra',
        ufId: 23,
      },
      {
        cidade: 'Campestre de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Campestre do Maranhão',
        ufId: 10,
      },
      {
        cidade: 'Campina da Lagoa',
        ufId: 18,
      },
      {
        cidade: 'Campina das Missões',
        ufId: 23,
      },
      {
        cidade: 'Campina do Monte Alegre',
        ufId: 26,
      },
      {
        cidade: 'Campina do Simão',
        ufId: 18,
      },
      {
        cidade: 'Campina Grande',
        ufId: 15,
      },
      {
        cidade: 'Campina Grande do Sul',
        ufId: 18,
      },
      {
        cidade: 'Campina Verde',
        ufId: 11,
      },
      {
        cidade: 'Campinaçu',
        ufId: 9,
      },
      {
        cidade: 'Campinápolis',
        ufId: 13,
      },
      {
        cidade: 'Campinas',
        ufId: 26,
      },
      {
        cidade: 'Campinas do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Campinas do Sul',
        ufId: 23,
      },
      {
        cidade: 'Campinorte',
        ufId: 9,
      },
      {
        cidade: 'Campo Alegre',
        ufId: 24,
      },
      {
        cidade: 'Campo Alegre',
        ufId: 2,
      },
      {
        cidade: 'Campo Alegre de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Campo Alegre de Lourdes',
        ufId: 5,
      },
      {
        cidade: 'Campo Alegre do Fidalgo',
        ufId: 17,
      },
      {
        cidade: 'Campo Azul',
        ufId: 11,
      },
      {
        cidade: 'Campo Belo',
        ufId: 11,
      },
      {
        cidade: 'Campo Belo do Sul',
        ufId: 24,
      },
      {
        cidade: 'Campo Bom',
        ufId: 23,
      },
      {
        cidade: 'Campo Bonito',
        ufId: 18,
      },
      {
        cidade: 'Campo do Brito',
        ufId: 25,
      },
      {
        cidade: 'Campo do Meio',
        ufId: 11,
      },
      {
        cidade: 'Campo do Tenente',
        ufId: 18,
      },
      {
        cidade: 'Campo Erê',
        ufId: 24,
      },
      {
        cidade: 'Campo Florido',
        ufId: 11,
      },
      {
        cidade: 'Campo Formoso',
        ufId: 5,
      },
      {
        cidade: 'Campo Grande',
        ufId: 2,
      },
      {
        cidade: 'Campo Grande',
        ufId: 12,
      },
      {
        cidade: 'Campo Grande do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Campo Largo',
        ufId: 18,
      },
      {
        cidade: 'Campo Largo do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Campo Limpo de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Campo Limpo Paulista',
        ufId: 26,
      },
      {
        cidade: 'Campo Magro',
        ufId: 18,
      },
      {
        cidade: 'Campo Maior',
        ufId: 17,
      },
      {
        cidade: 'Campo Mourão',
        ufId: 18,
      },
      {
        cidade: 'Campo Novo',
        ufId: 23,
      },
      {
        cidade: 'Campo Novo de Rondônia',
        ufId: 21,
      },
      {
        cidade: 'Campo Novo do Parecis',
        ufId: 13,
      },
      {
        cidade: 'Campo Redondo',
        ufId: 20,
      },
      {
        cidade: 'Campo Verde',
        ufId: 13,
      },
      {
        cidade: 'Campos Altos',
        ufId: 11,
      },
      {
        cidade: 'Campos Belos',
        ufId: 9,
      },
      {
        cidade: 'Campos Borges',
        ufId: 23,
      },
      {
        cidade: 'Campos de Júlio',
        ufId: 13,
      },
      {
        cidade: 'Campos do Jordão',
        ufId: 26,
      },
      {
        cidade: 'Campos dos Goytacazes',
        ufId: 19,
      },
      {
        cidade: 'Campos Gerais',
        ufId: 11,
      },
      {
        cidade: 'Campos Lindos',
        ufId: 27,
      },
      {
        cidade: 'Campos Novos',
        ufId: 24,
      },
      {
        cidade: 'Campos Novos Paulista',
        ufId: 26,
      },
      {
        cidade: 'Campos Sales',
        ufId: 6,
      },
      {
        cidade: 'Campos Verdes',
        ufId: 9,
      },
      {
        cidade: 'Camutanga',
        ufId: 16,
      },
      {
        cidade: 'Cana Verde',
        ufId: 11,
      },
      {
        cidade: 'Canaã',
        ufId: 11,
      },
      {
        cidade: 'Canaã dos Carajás',
        ufId: 14,
      },
      {
        cidade: 'Canabrava do Norte',
        ufId: 13,
      },
      {
        cidade: 'Cananéia',
        ufId: 26,
      },
      {
        cidade: 'Canapi',
        ufId: 2,
      },
      {
        cidade: 'Canápolis',
        ufId: 5,
      },
      {
        cidade: 'Canápolis',
        ufId: 11,
      },
      {
        cidade: 'Canarana',
        ufId: 5,
      },
      {
        cidade: 'Canarana',
        ufId: 13,
      },
      {
        cidade: 'Canas',
        ufId: 26,
      },
      {
        cidade: 'Canavieira',
        ufId: 17,
      },
      {
        cidade: 'Canavieiras',
        ufId: 5,
      },
      {
        cidade: 'Candeal',
        ufId: 5,
      },
      {
        cidade: 'Candeias',
        ufId: 5,
      },
      {
        cidade: 'Candeias',
        ufId: 11,
      },
      {
        cidade: 'Candeias do Jamari',
        ufId: 21,
      },
      {
        cidade: 'Candelária',
        ufId: 23,
      },
      {
        cidade: 'Candiba',
        ufId: 5,
      },
      {
        cidade: 'Cândido de Abreu',
        ufId: 18,
      },
      {
        cidade: 'Cândido Godói',
        ufId: 23,
      },
      {
        cidade: 'Cândido Mendes',
        ufId: 10,
      },
      {
        cidade: 'Cândido Mota',
        ufId: 26,
      },
      {
        cidade: 'Cândido Rodrigues',
        ufId: 26,
      },
      {
        cidade: 'Cândido Sales',
        ufId: 5,
      },
      {
        cidade: 'Candiota',
        ufId: 23,
      },
      {
        cidade: 'Candói',
        ufId: 18,
      },
      {
        cidade: 'Canela',
        ufId: 23,
      },
      {
        cidade: 'Canelinha',
        ufId: 24,
      },
      {
        cidade: 'Canguaretama',
        ufId: 20,
      },
      {
        cidade: 'Canguçu',
        ufId: 23,
      },
      {
        cidade: 'Canhoba',
        ufId: 25,
      },
      {
        cidade: 'Canhotinho',
        ufId: 16,
      },
      {
        cidade: 'Canindé',
        ufId: 6,
      },
      {
        cidade: 'Canindé de São Francisco',
        ufId: 25,
      },
      {
        cidade: 'Canitar',
        ufId: 26,
      },
      {
        cidade: 'Canoas',
        ufId: 23,
      },
      {
        cidade: 'Canoinhas',
        ufId: 24,
      },
      {
        cidade: 'Cansanção',
        ufId: 5,
      },
      {
        cidade: 'Cantá',
        ufId: 22,
      },
      {
        cidade: 'Cantagalo',
        ufId: 19,
      },
      {
        cidade: 'Cantagalo',
        ufId: 18,
      },
      {
        cidade: 'Cantagalo',
        ufId: 11,
      },
      {
        cidade: 'Cantanhede',
        ufId: 10,
      },
      {
        cidade: 'Canto do Buriti',
        ufId: 17,
      },
      {
        cidade: 'Canudos',
        ufId: 5,
      },
      {
        cidade: 'Canudos do Vale',
        ufId: 23,
      },
      {
        cidade: 'Canutama',
        ufId: 3,
      },
      {
        cidade: 'Capanema',
        ufId: 14,
      },
      {
        cidade: 'Capanema',
        ufId: 18,
      },
      {
        cidade: 'Capão Alto',
        ufId: 24,
      },
      {
        cidade: 'Capão Bonito',
        ufId: 26,
      },
      {
        cidade: 'Capão Bonito do Sul',
        ufId: 23,
      },
      {
        cidade: 'Capão da Canoa',
        ufId: 23,
      },
      {
        cidade: 'Capão do Cipó',
        ufId: 23,
      },
      {
        cidade: 'Capão do Leão',
        ufId: 23,
      },
      {
        cidade: 'Caparaó',
        ufId: 11,
      },
      {
        cidade: 'Capela',
        ufId: 2,
      },
      {
        cidade: 'Capela',
        ufId: 25,
      },
      {
        cidade: 'Capela de Santana',
        ufId: 23,
      },
      {
        cidade: 'Capela do Alto',
        ufId: 26,
      },
      {
        cidade: 'Capela do Alto Alegre',
        ufId: 5,
      },
      {
        cidade: 'Capela Nova',
        ufId: 11,
      },
      {
        cidade: 'Capelinha',
        ufId: 11,
      },
      {
        cidade: 'Capetinga',
        ufId: 11,
      },
      {
        cidade: 'Capim',
        ufId: 15,
      },
      {
        cidade: 'Capim Branco',
        ufId: 11,
      },
      {
        cidade: 'Capim Grosso',
        ufId: 5,
      },
      {
        cidade: 'Capinópolis',
        ufId: 11,
      },
      {
        cidade: 'Capinzal',
        ufId: 24,
      },
      {
        cidade: 'Capinzal do Norte',
        ufId: 10,
      },
      {
        cidade: 'Capistrano',
        ufId: 6,
      },
      {
        cidade: 'Capitão',
        ufId: 23,
      },
      {
        cidade: 'Capitão Andrade',
        ufId: 11,
      },
      {
        cidade: 'Capitão de Campos',
        ufId: 17,
      },
      {
        cidade: 'Capitão Enéas',
        ufId: 11,
      },
      {
        cidade: 'Capitão Gervásio Oliveira',
        ufId: 17,
      },
      {
        cidade: 'Capitão Leônidas Marques',
        ufId: 18,
      },
      {
        cidade: 'Capitão Poço',
        ufId: 14,
      },
      {
        cidade: 'Capitólio',
        ufId: 11,
      },
      {
        cidade: 'Capivari',
        ufId: 26,
      },
      {
        cidade: 'Capivari de Baixo',
        ufId: 24,
      },
      {
        cidade: 'Capivari do Sul',
        ufId: 23,
      },
      {
        cidade: 'Capixaba',
        ufId: 1,
      },
      {
        cidade: 'Capoeiras',
        ufId: 16,
      },
      {
        cidade: 'Caputira',
        ufId: 11,
      },
      {
        cidade: 'Caraá',
        ufId: 23,
      },
      {
        cidade: 'Caracaraí',
        ufId: 22,
      },
      {
        cidade: 'Caracol',
        ufId: 17,
      },
      {
        cidade: 'Caracol',
        ufId: 12,
      },
      {
        cidade: 'Caraguatatuba',
        ufId: 26,
      },
      {
        cidade: 'Caraí',
        ufId: 11,
      },
      {
        cidade: 'Caraíbas',
        ufId: 5,
      },
      {
        cidade: 'Carambeí',
        ufId: 18,
      },
      {
        cidade: 'Caranaíba',
        ufId: 11,
      },
      {
        cidade: 'Carandaí',
        ufId: 11,
      },
      {
        cidade: 'Carangola',
        ufId: 11,
      },
      {
        cidade: 'Carapebus',
        ufId: 19,
      },
      {
        cidade: 'Carapicuíba',
        ufId: 26,
      },
      {
        cidade: 'Caratinga',
        ufId: 11,
      },
      {
        cidade: 'Carauari',
        ufId: 3,
      },
      {
        cidade: 'Caraúbas',
        ufId: 20,
      },
      {
        cidade: 'Caraúbas',
        ufId: 15,
      },
      {
        cidade: 'Caraúbas do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Caravelas',
        ufId: 5,
      },
      {
        cidade: 'Carazinho',
        ufId: 23,
      },
      {
        cidade: 'Carbonita',
        ufId: 11,
      },
      {
        cidade: 'Cardeal da Silva',
        ufId: 5,
      },
      {
        cidade: 'Cardoso',
        ufId: 26,
      },
      {
        cidade: 'Cardoso Moreira',
        ufId: 19,
      },
      {
        cidade: 'Careaçu',
        ufId: 11,
      },
      {
        cidade: 'Careiro',
        ufId: 3,
      },
      {
        cidade: 'Careiro da Várzea',
        ufId: 3,
      },
      {
        cidade: 'Cariacica',
        ufId: 8,
      },
      {
        cidade: 'Caridade',
        ufId: 6,
      },
      {
        cidade: 'Caridade do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Carinhanha',
        ufId: 5,
      },
      {
        cidade: 'Carira',
        ufId: 25,
      },
      {
        cidade: 'Cariré',
        ufId: 6,
      },
      {
        cidade: 'Cariri do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Caririaçu',
        ufId: 6,
      },
      {
        cidade: 'Cariús',
        ufId: 6,
      },
      {
        cidade: 'Carlinda',
        ufId: 13,
      },
      {
        cidade: 'Carlópolis',
        ufId: 18,
      },
      {
        cidade: 'Carlos Barbosa',
        ufId: 23,
      },
      {
        cidade: 'Carlos Chagas',
        ufId: 11,
      },
      {
        cidade: 'Carlos Gomes',
        ufId: 23,
      },
      {
        cidade: 'Carmésia',
        ufId: 11,
      },
      {
        cidade: 'Carmo',
        ufId: 19,
      },
      {
        cidade: 'Carmo da Cachoeira',
        ufId: 11,
      },
      {
        cidade: 'Carmo da Mata',
        ufId: 11,
      },
      {
        cidade: 'Carmo de Minas',
        ufId: 11,
      },
      {
        cidade: 'Carmo do Cajuru',
        ufId: 11,
      },
      {
        cidade: 'Carmo do Paranaíba',
        ufId: 11,
      },
      {
        cidade: 'Carmo do Rio Claro',
        ufId: 11,
      },
      {
        cidade: 'Carmo do Rio Verde',
        ufId: 9,
      },
      {
        cidade: 'Carmolândia',
        ufId: 27,
      },
      {
        cidade: 'Carmópolis',
        ufId: 25,
      },
      {
        cidade: 'Carmópolis de Minas',
        ufId: 11,
      },
      {
        cidade: 'Carnaíba',
        ufId: 16,
      },
      {
        cidade: 'Carnaúba dos Dantas',
        ufId: 20,
      },
      {
        cidade: 'Carnaubais',
        ufId: 20,
      },
      {
        cidade: 'Carnaubal',
        ufId: 6,
      },
      {
        cidade: 'Carnaubeira da Penha',
        ufId: 16,
      },
      {
        cidade: 'Carneirinho',
        ufId: 11,
      },
      {
        cidade: 'Carneiros',
        ufId: 2,
      },
      {
        cidade: 'Caroebe',
        ufId: 22,
      },
      {
        cidade: 'Carolina',
        ufId: 10,
      },
      {
        cidade: 'Carpina',
        ufId: 16,
      },
      {
        cidade: 'Carrancas',
        ufId: 11,
      },
      {
        cidade: 'Carrapateira',
        ufId: 15,
      },
      {
        cidade: 'Carrasco Bonito',
        ufId: 27,
      },
      {
        cidade: 'Caruaru',
        ufId: 16,
      },
      {
        cidade: 'Carutapera',
        ufId: 10,
      },
      {
        cidade: 'Carvalhópolis',
        ufId: 11,
      },
      {
        cidade: 'Carvalhos',
        ufId: 11,
      },
      {
        cidade: 'Casa Branca',
        ufId: 26,
      },
      {
        cidade: 'Casa Grande',
        ufId: 11,
      },
      {
        cidade: 'Casa Nova',
        ufId: 5,
      },
      {
        cidade: 'Casca',
        ufId: 23,
      },
      {
        cidade: 'Cascalho Rico',
        ufId: 11,
      },
      {
        cidade: 'Cascavel',
        ufId: 18,
      },
      {
        cidade: 'Cascavel',
        ufId: 6,
      },
      {
        cidade: 'Caseara',
        ufId: 27,
      },
      {
        cidade: 'Caseiros',
        ufId: 23,
      },
      {
        cidade: 'Casimiro de Abreu',
        ufId: 19,
      },
      {
        cidade: 'Casinhas',
        ufId: 16,
      },
      {
        cidade: 'Casserengue',
        ufId: 15,
      },
      {
        cidade: 'Cássia',
        ufId: 11,
      },
      {
        cidade: 'Cássia dos Coqueiros',
        ufId: 26,
      },
      {
        cidade: 'Cassilândia',
        ufId: 12,
      },
      {
        cidade: 'Castanhal',
        ufId: 14,
      },
      {
        cidade: 'Castanheira',
        ufId: 13,
      },
      {
        cidade: 'Castanheiras',
        ufId: 21,
      },
      {
        cidade: 'Castelândia',
        ufId: 9,
      },
      {
        cidade: 'Castelo',
        ufId: 8,
      },
      {
        cidade: 'Castelo do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Castilho',
        ufId: 26,
      },
      {
        cidade: 'Castro',
        ufId: 18,
      },
      {
        cidade: 'Castro Alves',
        ufId: 5,
      },
      {
        cidade: 'Cataguases',
        ufId: 11,
      },
      {
        cidade: 'Catalão',
        ufId: 9,
      },
      {
        cidade: 'Catanduva',
        ufId: 26,
      },
      {
        cidade: 'Catanduvas',
        ufId: 18,
      },
      {
        cidade: 'Catanduvas',
        ufId: 24,
      },
      {
        cidade: 'Catarina',
        ufId: 6,
      },
      {
        cidade: 'Catas Altas',
        ufId: 11,
      },
      {
        cidade: 'Catas Altas da Noruega',
        ufId: 11,
      },
      {
        cidade: 'Catende',
        ufId: 16,
      },
      {
        cidade: 'Catiguá',
        ufId: 26,
      },
      {
        cidade: 'Catingueira',
        ufId: 15,
      },
      {
        cidade: 'Catolândia',
        ufId: 5,
      },
      {
        cidade: 'Catolé do Rocha',
        ufId: 15,
      },
      {
        cidade: 'Catu',
        ufId: 5,
      },
      {
        cidade: 'Catuípe',
        ufId: 23,
      },
      {
        cidade: 'Catuji',
        ufId: 11,
      },
      {
        cidade: 'Catunda',
        ufId: 6,
      },
      {
        cidade: 'Caturaí',
        ufId: 9,
      },
      {
        cidade: 'Caturama',
        ufId: 5,
      },
      {
        cidade: 'Caturité',
        ufId: 15,
      },
      {
        cidade: 'Catuti',
        ufId: 11,
      },
      {
        cidade: 'Caucaia',
        ufId: 6,
      },
      {
        cidade: 'Cavalcante',
        ufId: 9,
      },
      {
        cidade: 'Caxambu',
        ufId: 11,
      },
      {
        cidade: 'Caxambu do Sul',
        ufId: 24,
      },
      {
        cidade: 'Caxias',
        ufId: 10,
      },
      {
        cidade: 'Caxias do Sul',
        ufId: 23,
      },
      {
        cidade: 'Caxingó',
        ufId: 17,
      },
      {
        cidade: 'Ceará-Mirim',
        ufId: 20,
      },
      {
        cidade: 'Cedral',
        ufId: 10,
      },
      {
        cidade: 'Cedral',
        ufId: 26,
      },
      {
        cidade: 'Cedro',
        ufId: 6,
      },
      {
        cidade: 'Cedro',
        ufId: 16,
      },
      {
        cidade: 'Cedro de São João',
        ufId: 25,
      },
      {
        cidade: 'Cedro do Abaeté',
        ufId: 11,
      },
      {
        cidade: 'Celso Ramos',
        ufId: 24,
      },
      {
        cidade: 'Centenário',
        ufId: 23,
      },
      {
        cidade: 'Centenário',
        ufId: 27,
      },
      {
        cidade: 'Centenário do Sul',
        ufId: 18,
      },
      {
        cidade: 'Central',
        ufId: 5,
      },
      {
        cidade: 'Central de Minas',
        ufId: 11,
      },
      {
        cidade: 'Central do Maranhão',
        ufId: 10,
      },
      {
        cidade: 'Centralina',
        ufId: 11,
      },
      {
        cidade: 'Centro do Guilherme',
        ufId: 10,
      },
      {
        cidade: 'Centro Novo do Maranhão',
        ufId: 10,
      },
      {
        cidade: 'Cerejeiras',
        ufId: 21,
      },
      {
        cidade: 'Ceres',
        ufId: 9,
      },
      {
        cidade: 'Cerqueira César',
        ufId: 26,
      },
      {
        cidade: 'Cerquilho',
        ufId: 26,
      },
      {
        cidade: 'Cerrito',
        ufId: 23,
      },
      {
        cidade: 'Cerro Azul',
        ufId: 18,
      },
      {
        cidade: 'Cerro Branco',
        ufId: 23,
      },
      {
        cidade: 'Cerro Corá',
        ufId: 20,
      },
      {
        cidade: 'Cerro Grande',
        ufId: 23,
      },
      {
        cidade: 'Cerro Grande do Sul',
        ufId: 23,
      },
      {
        cidade: 'Cerro Largo',
        ufId: 23,
      },
      {
        cidade: 'Cerro Negro',
        ufId: 24,
      },
      {
        cidade: 'Cesário Lange',
        ufId: 26,
      },
      {
        cidade: 'Céu Azul',
        ufId: 18,
      },
      {
        cidade: 'Cezarina',
        ufId: 9,
      },
      {
        cidade: 'Chã de Alegria',
        ufId: 16,
      },
      {
        cidade: 'Chã Grande',
        ufId: 16,
      },
      {
        cidade: 'Chã Preta',
        ufId: 2,
      },
      {
        cidade: 'Chácara',
        ufId: 11,
      },
      {
        cidade: 'Chalé',
        ufId: 11,
      },
      {
        cidade: 'Chapada',
        ufId: 23,
      },
      {
        cidade: 'Chapada da Natividade',
        ufId: 27,
      },
      {
        cidade: 'Chapada de Areia',
        ufId: 27,
      },
      {
        cidade: 'Chapada do Norte',
        ufId: 11,
      },
      {
        cidade: 'Chapada dos Guimarães',
        ufId: 13,
      },
      {
        cidade: 'Chapada Gaúcha',
        ufId: 11,
      },
      {
        cidade: 'Chapadão do Céu',
        ufId: 9,
      },
      {
        cidade: 'Chapadão do Lageado',
        ufId: 24,
      },
      {
        cidade: 'Chapadão do Sul',
        ufId: 12,
      },
      {
        cidade: 'Chapadinha',
        ufId: 10,
      },
      {
        cidade: 'Chapecó',
        ufId: 24,
      },
      {
        cidade: 'Charqueada',
        ufId: 26,
      },
      {
        cidade: 'Charqueadas',
        ufId: 23,
      },
      {
        cidade: 'Charrua',
        ufId: 23,
      },
      {
        cidade: 'Chaval',
        ufId: 6,
      },
      {
        cidade: 'Chavantes',
        ufId: 26,
      },
      {
        cidade: 'Chaves',
        ufId: 14,
      },
      {
        cidade: 'Chiador',
        ufId: 11,
      },
      {
        cidade: 'Chiapetta',
        ufId: 23,
      },
      {
        cidade: 'Chopinzinho',
        ufId: 18,
      },
      {
        cidade: 'Choró',
        ufId: 6,
      },
      {
        cidade: 'Chorozinho',
        ufId: 6,
      },
      {
        cidade: 'Chorrochó',
        ufId: 5,
      },
      {
        cidade: 'Chuí',
        ufId: 23,
      },
      {
        cidade: 'Chupinguaia',
        ufId: 21,
      },
      {
        cidade: 'Chuvisca',
        ufId: 23,
      },
      {
        cidade: 'Cianorte',
        ufId: 18,
      },
      {
        cidade: 'Cícero Dantas',
        ufId: 5,
      },
      {
        cidade: 'Cidade Gaúcha',
        ufId: 18,
      },
      {
        cidade: 'Cidade Ocidental',
        ufId: 9,
      },
      {
        cidade: 'Cidelândia',
        ufId: 10,
      },
      {
        cidade: 'Cidreira',
        ufId: 23,
      },
      {
        cidade: 'Cipó',
        ufId: 5,
      },
      {
        cidade: 'Cipotânea',
        ufId: 11,
      },
      {
        cidade: 'Ciríaco',
        ufId: 23,
      },
      {
        cidade: 'Claraval',
        ufId: 11,
      },
      {
        cidade: 'Claro dos Poções',
        ufId: 11,
      },
      {
        cidade: 'Cláudia',
        ufId: 13,
      },
      {
        cidade: 'Cláudio',
        ufId: 11,
      },
      {
        cidade: 'Clementina',
        ufId: 26,
      },
      {
        cidade: 'Clevelândia',
        ufId: 18,
      },
      {
        cidade: 'Coaraci',
        ufId: 5,
      },
      {
        cidade: 'Coari',
        ufId: 3,
      },
      {
        cidade: 'Cocal',
        ufId: 17,
      },
      {
        cidade: 'Cocal de Telha',
        ufId: 17,
      },
      {
        cidade: 'Cocal do Sul',
        ufId: 24,
      },
      {
        cidade: 'Cocal dos Alves',
        ufId: 17,
      },
      {
        cidade: 'Cocalinho',
        ufId: 13,
      },
      {
        cidade: 'Cocalzinho de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Cocos',
        ufId: 5,
      },
      {
        cidade: 'Codajás',
        ufId: 3,
      },
      {
        cidade: 'Codó',
        ufId: 10,
      },
      {
        cidade: 'Coelho Neto',
        ufId: 10,
      },
      {
        cidade: 'Coimbra',
        ufId: 11,
      },
      {
        cidade: 'Coité do Nóia',
        ufId: 2,
      },
      {
        cidade: 'Coivaras',
        ufId: 17,
      },
      {
        cidade: 'Colares',
        ufId: 14,
      },
      {
        cidade: 'Colatina',
        ufId: 8,
      },
      {
        cidade: 'Colíder',
        ufId: 13,
      },
      {
        cidade: 'Colina',
        ufId: 26,
      },
      {
        cidade: 'Colinas',
        ufId: 23,
      },
      {
        cidade: 'Colinas',
        ufId: 10,
      },
      {
        cidade: 'Colinas do Sul',
        ufId: 9,
      },
      {
        cidade: 'Colinas do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Colméia',
        ufId: 27,
      },
      {
        cidade: 'Colniza',
        ufId: 13,
      },
      {
        cidade: 'Colômbia',
        ufId: 26,
      },
      {
        cidade: 'Colombo',
        ufId: 18,
      },
      {
        cidade: 'Colônia do Gurguéia',
        ufId: 17,
      },
      {
        cidade: 'Colônia do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Colônia Leopoldina',
        ufId: 2,
      },
      {
        cidade: 'Colorado',
        ufId: 23,
      },
      {
        cidade: 'Colorado',
        ufId: 18,
      },
      {
        cidade: 'Colorado do Oeste',
        ufId: 21,
      },
      {
        cidade: 'Coluna',
        ufId: 11,
      },
      {
        cidade: 'Combinado',
        ufId: 27,
      },
      {
        cidade: 'Comendador Gomes',
        ufId: 11,
      },
      {
        cidade: 'Comendador Levy Gasparian',
        ufId: 19,
      },
      {
        cidade: 'Comercinho',
        ufId: 11,
      },
      {
        cidade: 'Comodoro',
        ufId: 13,
      },
      {
        cidade: 'Conceição',
        ufId: 15,
      },
      {
        cidade: 'Conceição da Aparecida',
        ufId: 11,
      },
      {
        cidade: 'Conceição da Barra',
        ufId: 8,
      },
      {
        cidade: 'Conceição da Barra de Minas',
        ufId: 11,
      },
      {
        cidade: 'Conceição da Feira',
        ufId: 5,
      },
      {
        cidade: 'Conceição das Alagoas',
        ufId: 11,
      },
      {
        cidade: 'Conceição das Pedras',
        ufId: 11,
      },
      {
        cidade: 'Conceição de Ipanema',
        ufId: 11,
      },
      {
        cidade: 'Conceição de Macabu',
        ufId: 19,
      },
      {
        cidade: 'Conceição do Almeida',
        ufId: 5,
      },
      {
        cidade: 'Conceição do Araguaia',
        ufId: 14,
      },
      {
        cidade: 'Conceição do Canindé',
        ufId: 17,
      },
      {
        cidade: 'Conceição do Castelo',
        ufId: 8,
      },
      {
        cidade: 'Conceição do Coité',
        ufId: 5,
      },
      {
        cidade: 'Conceição do Jacuípe',
        ufId: 5,
      },
      {
        cidade: 'Conceição do Lago-Açu',
        ufId: 10,
      },
      {
        cidade: 'Conceição do Mato Dentro',
        ufId: 11,
      },
      {
        cidade: 'Conceição do Pará',
        ufId: 11,
      },
      {
        cidade: 'Conceição do Rio Verde',
        ufId: 11,
      },
      {
        cidade: 'Conceição do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Conceição dos Ouros',
        ufId: 11,
      },
      {
        cidade: 'Conchal',
        ufId: 26,
      },
      {
        cidade: 'Conchas',
        ufId: 26,
      },
      {
        cidade: 'Concórdia',
        ufId: 24,
      },
      {
        cidade: 'Concórdia do Pará',
        ufId: 14,
      },
      {
        cidade: 'Condado',
        ufId: 15,
      },
      {
        cidade: 'Condado',
        ufId: 16,
      },
      {
        cidade: 'Conde',
        ufId: 15,
      },
      {
        cidade: 'Conde',
        ufId: 5,
      },
      {
        cidade: 'Condeúba',
        ufId: 5,
      },
      {
        cidade: 'Condor',
        ufId: 23,
      },
      {
        cidade: 'Cônego Marinho',
        ufId: 11,
      },
      {
        cidade: 'Confins',
        ufId: 11,
      },
      {
        cidade: 'Confresa',
        ufId: 13,
      },
      {
        cidade: 'Congo',
        ufId: 15,
      },
      {
        cidade: 'Congonhal',
        ufId: 11,
      },
      {
        cidade: 'Congonhas',
        ufId: 11,
      },
      {
        cidade: 'Congonhas do Norte',
        ufId: 11,
      },
      {
        cidade: 'Congonhinhas',
        ufId: 18,
      },
      {
        cidade: 'Conquista',
        ufId: 11,
      },
      {
        cidade: "Conquista D'Oeste",
        ufId: 13,
      },
      {
        cidade: 'Conselheiro Lafaiete',
        ufId: 11,
      },
      {
        cidade: 'Conselheiro Mairinck',
        ufId: 18,
      },
      {
        cidade: 'Conselheiro Pena',
        ufId: 11,
      },
      {
        cidade: 'Consolação',
        ufId: 11,
      },
      {
        cidade: 'Constantina',
        ufId: 23,
      },
      {
        cidade: 'Contagem',
        ufId: 11,
      },
      {
        cidade: 'Contenda',
        ufId: 18,
      },
      {
        cidade: 'Contendas do Sincorá',
        ufId: 5,
      },
      {
        cidade: 'Coqueiral',
        ufId: 11,
      },
      {
        cidade: 'Coqueiro Baixo',
        ufId: 23,
      },
      {
        cidade: 'Coqueiro Seco',
        ufId: 2,
      },
      {
        cidade: 'Coqueiros do Sul',
        ufId: 23,
      },
      {
        cidade: 'Coração de Jesus',
        ufId: 11,
      },
      {
        cidade: 'Coração de Maria',
        ufId: 5,
      },
      {
        cidade: 'Corbélia',
        ufId: 18,
      },
      {
        cidade: 'Cordeiro',
        ufId: 19,
      },
      {
        cidade: 'Cordeirópolis',
        ufId: 26,
      },
      {
        cidade: 'Cordeiros',
        ufId: 5,
      },
      {
        cidade: 'Cordilheira Alta',
        ufId: 24,
      },
      {
        cidade: 'Cordisburgo',
        ufId: 11,
      },
      {
        cidade: 'Cordislândia',
        ufId: 11,
      },
      {
        cidade: 'Coreaú',
        ufId: 6,
      },
      {
        cidade: 'Coremas',
        ufId: 15,
      },
      {
        cidade: 'Corguinho',
        ufId: 12,
      },
      {
        cidade: 'Coribe',
        ufId: 5,
      },
      {
        cidade: 'Corinto',
        ufId: 11,
      },
      {
        cidade: 'Cornélio Procópio',
        ufId: 18,
      },
      {
        cidade: 'Coroaci',
        ufId: 11,
      },
      {
        cidade: 'Coroados',
        ufId: 26,
      },
      {
        cidade: 'Coroatá',
        ufId: 10,
      },
      {
        cidade: 'Coromandel',
        ufId: 11,
      },
      {
        cidade: 'Coronel Barros',
        ufId: 23,
      },
      {
        cidade: 'Coronel Bicaco',
        ufId: 23,
      },
      {
        cidade: 'Coronel Domingos Soares',
        ufId: 18,
      },
      {
        cidade: 'Coronel Ezequiel',
        ufId: 20,
      },
      {
        cidade: 'Coronel Fabriciano',
        ufId: 11,
      },
      {
        cidade: 'Coronel Freitas',
        ufId: 24,
      },
      {
        cidade: 'Coronel João Pessoa',
        ufId: 20,
      },
      {
        cidade: 'Coronel João Sá',
        ufId: 5,
      },
      {
        cidade: 'Coronel José Dias',
        ufId: 17,
      },
      {
        cidade: 'Coronel Macedo',
        ufId: 26,
      },
      {
        cidade: 'Coronel Martins',
        ufId: 24,
      },
      {
        cidade: 'Coronel Murta',
        ufId: 11,
      },
      {
        cidade: 'Coronel Pacheco',
        ufId: 11,
      },
      {
        cidade: 'Coronel Pilar',
        ufId: 23,
      },
      {
        cidade: 'Coronel Sapucaia',
        ufId: 12,
      },
      {
        cidade: 'Coronel Vivida',
        ufId: 18,
      },
      {
        cidade: 'Coronel Xavier Chaves',
        ufId: 11,
      },
      {
        cidade: 'Córrego Danta',
        ufId: 11,
      },
      {
        cidade: 'Córrego do Bom Jesus',
        ufId: 11,
      },
      {
        cidade: 'Córrego do Ouro',
        ufId: 9,
      },
      {
        cidade: 'Córrego Fundo',
        ufId: 11,
      },
      {
        cidade: 'Córrego Novo',
        ufId: 11,
      },
      {
        cidade: 'Correia Pinto',
        ufId: 24,
      },
      {
        cidade: 'Corrente',
        ufId: 17,
      },
      {
        cidade: 'Correntes',
        ufId: 16,
      },
      {
        cidade: 'Correntina',
        ufId: 5,
      },
      {
        cidade: 'Cortês',
        ufId: 16,
      },
      {
        cidade: 'Corumbá',
        ufId: 12,
      },
      {
        cidade: 'Corumbá de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Corumbaíba',
        ufId: 9,
      },
      {
        cidade: 'Corumbataí',
        ufId: 26,
      },
      {
        cidade: 'Corumbataí do Sul',
        ufId: 18,
      },
      {
        cidade: 'Corumbiara',
        ufId: 21,
      },
      {
        cidade: 'Corupá',
        ufId: 24,
      },
      {
        cidade: 'Coruripe',
        ufId: 2,
      },
      {
        cidade: 'Cosmópolis',
        ufId: 26,
      },
      {
        cidade: 'Cosmorama',
        ufId: 26,
      },
      {
        cidade: 'Costa Marques',
        ufId: 21,
      },
      {
        cidade: 'Costa Rica',
        ufId: 12,
      },
      {
        cidade: 'Cotegipe',
        ufId: 5,
      },
      {
        cidade: 'Cotia',
        ufId: 26,
      },
      {
        cidade: 'Cotiporã',
        ufId: 23,
      },
      {
        cidade: 'Cotriguaçu',
        ufId: 13,
      },
      {
        cidade: 'Couto de Magalhães de Minas',
        ufId: 11,
      },
      {
        cidade: 'Couto Magalhães',
        ufId: 27,
      },
      {
        cidade: 'Coxilha',
        ufId: 23,
      },
      {
        cidade: 'Coxim',
        ufId: 12,
      },
      {
        cidade: 'Coxixola',
        ufId: 15,
      },
      {
        cidade: 'Craíbas',
        ufId: 2,
      },
      {
        cidade: 'Crateús',
        ufId: 6,
      },
      {
        cidade: 'Crato',
        ufId: 6,
      },
      {
        cidade: 'Cravinhos',
        ufId: 26,
      },
      {
        cidade: 'Cravolândia',
        ufId: 5,
      },
      {
        cidade: 'Criciúma',
        ufId: 24,
      },
      {
        cidade: 'Crisólita',
        ufId: 11,
      },
      {
        cidade: 'Crisópolis',
        ufId: 5,
      },
      {
        cidade: 'Crissiumal',
        ufId: 23,
      },
      {
        cidade: 'Cristais',
        ufId: 11,
      },
      {
        cidade: 'Cristais Paulista',
        ufId: 26,
      },
      {
        cidade: 'Cristal',
        ufId: 23,
      },
      {
        cidade: 'Cristal do Sul',
        ufId: 23,
      },
      {
        cidade: 'Cristalândia',
        ufId: 27,
      },
      {
        cidade: 'Cristalândia do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Cristália',
        ufId: 11,
      },
      {
        cidade: 'Cristalina',
        ufId: 9,
      },
      {
        cidade: 'Cristiano Otoni',
        ufId: 11,
      },
      {
        cidade: 'Cristianópolis',
        ufId: 9,
      },
      {
        cidade: 'Cristina',
        ufId: 11,
      },
      {
        cidade: 'Cristinápolis',
        ufId: 25,
      },
      {
        cidade: 'Cristino Castro',
        ufId: 17,
      },
      {
        cidade: 'Cristópolis',
        ufId: 5,
      },
      {
        cidade: 'Crixás',
        ufId: 9,
      },
      {
        cidade: 'Crixás do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Croatá',
        ufId: 6,
      },
      {
        cidade: 'Cromínia',
        ufId: 9,
      },
      {
        cidade: 'Crucilândia',
        ufId: 11,
      },
      {
        cidade: 'Cruz',
        ufId: 6,
      },
      {
        cidade: 'Cruz Alta',
        ufId: 23,
      },
      {
        cidade: 'Cruz das Almas',
        ufId: 5,
      },
      {
        cidade: 'Cruz do Espírito Santo',
        ufId: 15,
      },
      {
        cidade: 'Cruz Machado',
        ufId: 18,
      },
      {
        cidade: 'Cruzália',
        ufId: 26,
      },
      {
        cidade: 'Cruzaltense',
        ufId: 23,
      },
      {
        cidade: 'Cruzeiro',
        ufId: 26,
      },
      {
        cidade: 'Cruzeiro da Fortaleza',
        ufId: 11,
      },
      {
        cidade: 'Cruzeiro do Iguaçu',
        ufId: 18,
      },
      {
        cidade: 'Cruzeiro do Oeste',
        ufId: 18,
      },
      {
        cidade: 'Cruzeiro do Sul',
        ufId: 18,
      },
      {
        cidade: 'Cruzeiro do Sul',
        ufId: 23,
      },
      {
        cidade: 'Cruzeiro do Sul',
        ufId: 1,
      },
      {
        cidade: 'Cruzeta',
        ufId: 20,
      },
      {
        cidade: 'Cruzília',
        ufId: 11,
      },
      {
        cidade: 'Cruzmaltina',
        ufId: 18,
      },
      {
        cidade: 'Cubatão',
        ufId: 26,
      },
      {
        cidade: 'Cubati',
        ufId: 15,
      },
      {
        cidade: 'Cuiabá',
        ufId: 13,
      },
      {
        cidade: 'Cuité',
        ufId: 15,
      },
      {
        cidade: 'Cuité de Mamanguape',
        ufId: 15,
      },
      {
        cidade: 'Cuitegi',
        ufId: 15,
      },
      {
        cidade: 'Cujubim',
        ufId: 21,
      },
      {
        cidade: 'Cumari',
        ufId: 9,
      },
      {
        cidade: 'Cumaru',
        ufId: 16,
      },
      {
        cidade: 'Cumaru do Norte',
        ufId: 14,
      },
      {
        cidade: 'Cumbe',
        ufId: 25,
      },
      {
        cidade: 'Cunha',
        ufId: 26,
      },
      {
        cidade: 'Cunha Porã',
        ufId: 24,
      },
      {
        cidade: 'Cunhataí',
        ufId: 24,
      },
      {
        cidade: 'Cuparaque',
        ufId: 11,
      },
      {
        cidade: 'Cupira',
        ufId: 16,
      },
      {
        cidade: 'Curaçá',
        ufId: 5,
      },
      {
        cidade: 'Curimatá',
        ufId: 17,
      },
      {
        cidade: 'Curionópolis',
        ufId: 14,
      },
      {
        cidade: 'Curitiba',
        ufId: 18,
      },
      {
        cidade: 'Curitibanos',
        ufId: 24,
      },
      {
        cidade: 'Curiúva',
        ufId: 18,
      },
      {
        cidade: 'Currais',
        ufId: 17,
      },
      {
        cidade: 'Currais Novos',
        ufId: 20,
      },
      {
        cidade: 'Curral de Cima',
        ufId: 15,
      },
      {
        cidade: 'Curral de Dentro',
        ufId: 11,
      },
      {
        cidade: 'Curral Novo do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Curral Velho',
        ufId: 15,
      },
      {
        cidade: 'Curralinho',
        ufId: 14,
      },
      {
        cidade: 'Curralinhos',
        ufId: 17,
      },
      {
        cidade: 'Curuá',
        ufId: 14,
      },
      {
        cidade: 'Curuçá',
        ufId: 14,
      },
      {
        cidade: 'Cururupu',
        ufId: 10,
      },
      {
        cidade: 'Curvelândia',
        ufId: 13,
      },
      {
        cidade: 'Curvelo',
        ufId: 11,
      },
      {
        cidade: 'Custódia',
        ufId: 16,
      },
      {
        cidade: 'Cutias',
        ufId: 4,
      },
      {
        cidade: 'Damianópolis',
        ufId: 9,
      },
      {
        cidade: 'Damião',
        ufId: 15,
      },
      {
        cidade: 'Damolândia',
        ufId: 9,
      },
      {
        cidade: 'Darcinópolis',
        ufId: 27,
      },
      {
        cidade: 'Dário Meira',
        ufId: 5,
      },
      {
        cidade: 'Datas',
        ufId: 11,
      },
      {
        cidade: 'David Canabarro',
        ufId: 23,
      },
      {
        cidade: 'Davinópolis',
        ufId: 10,
      },
      {
        cidade: 'Davinópolis',
        ufId: 9,
      },
      {
        cidade: 'Delfim Moreira',
        ufId: 11,
      },
      {
        cidade: 'Delfinópolis',
        ufId: 11,
      },
      {
        cidade: 'Delmiro Gouveia',
        ufId: 2,
      },
      {
        cidade: 'Delta',
        ufId: 11,
      },
      {
        cidade: 'Demerval Lobão',
        ufId: 17,
      },
      {
        cidade: 'Denise',
        ufId: 13,
      },
      {
        cidade: 'Deodápolis',
        ufId: 12,
      },
      {
        cidade: 'Deputado Irapuan Pinheiro',
        ufId: 6,
      },
      {
        cidade: 'Derrubadas',
        ufId: 23,
      },
      {
        cidade: 'Descalvado',
        ufId: 26,
      },
      {
        cidade: 'Descanso',
        ufId: 24,
      },
      {
        cidade: 'Descoberto',
        ufId: 11,
      },
      {
        cidade: 'Desterro',
        ufId: 15,
      },
      {
        cidade: 'Desterro de Entre Rios',
        ufId: 11,
      },
      {
        cidade: 'Desterro do Melo',
        ufId: 11,
      },
      {
        cidade: 'Dezesseis de Novembro',
        ufId: 23,
      },
      {
        cidade: 'Diadema',
        ufId: 26,
      },
      {
        cidade: 'Diamante',
        ufId: 15,
      },
      {
        cidade: "Diamante D'Oeste",
        ufId: 18,
      },
      {
        cidade: 'Diamante do Norte',
        ufId: 18,
      },
      {
        cidade: 'Diamante do Sul',
        ufId: 18,
      },
      {
        cidade: 'Diamantina',
        ufId: 11,
      },
      {
        cidade: 'Diamantino',
        ufId: 13,
      },
      {
        cidade: 'Dianópolis',
        ufId: 27,
      },
      {
        cidade: "Dias d'Ávila",
        ufId: 5,
      },
      {
        cidade: 'Dilermando de Aguiar',
        ufId: 23,
      },
      {
        cidade: 'Diogo de Vasconcelos',
        ufId: 11,
      },
      {
        cidade: 'Dionísio',
        ufId: 11,
      },
      {
        cidade: 'Dionísio Cerqueira',
        ufId: 24,
      },
      {
        cidade: 'Diorama',
        ufId: 9,
      },
      {
        cidade: 'Dirce Reis',
        ufId: 26,
      },
      {
        cidade: 'Dirceu Arcoverde',
        ufId: 17,
      },
      {
        cidade: 'Divina Pastora',
        ufId: 25,
      },
      {
        cidade: 'Divinésia',
        ufId: 11,
      },
      {
        cidade: 'Divino',
        ufId: 11,
      },
      {
        cidade: 'Divino das Laranjeiras',
        ufId: 11,
      },
      {
        cidade: 'Divino de São Lourenço',
        ufId: 8,
      },
      {
        cidade: 'Divinolândia',
        ufId: 26,
      },
      {
        cidade: 'Divinolândia de Minas',
        ufId: 11,
      },
      {
        cidade: 'Divinópolis',
        ufId: 11,
      },
      {
        cidade: 'Divinópolis de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Divinópolis do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Divisa Alegre',
        ufId: 11,
      },
      {
        cidade: 'Divisa Nova',
        ufId: 11,
      },
      {
        cidade: 'Divisópolis',
        ufId: 11,
      },
      {
        cidade: 'Dobrada',
        ufId: 26,
      },
      {
        cidade: 'Dois Córregos',
        ufId: 26,
      },
      {
        cidade: 'Dois Irmãos',
        ufId: 23,
      },
      {
        cidade: 'Dois Irmãos das Missões',
        ufId: 23,
      },
      {
        cidade: 'Dois Irmãos do Buriti',
        ufId: 12,
      },
      {
        cidade: 'Dois Irmãos do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Dois Lajeados',
        ufId: 23,
      },
      {
        cidade: 'Dois Riachos',
        ufId: 2,
      },
      {
        cidade: 'Dois Vizinhos',
        ufId: 18,
      },
      {
        cidade: 'Dolcinópolis',
        ufId: 26,
      },
      {
        cidade: 'Dom Aquino',
        ufId: 13,
      },
      {
        cidade: 'Dom Basílio',
        ufId: 5,
      },
      {
        cidade: 'Dom Bosco',
        ufId: 11,
      },
      {
        cidade: 'Dom Cavati',
        ufId: 11,
      },
      {
        cidade: 'Dom Eliseu',
        ufId: 14,
      },
      {
        cidade: 'Dom Expedito Lopes',
        ufId: 17,
      },
      {
        cidade: 'Dom Feliciano',
        ufId: 23,
      },
      {
        cidade: 'Dom Inocêncio',
        ufId: 17,
      },
      {
        cidade: 'Dom Joaquim',
        ufId: 11,
      },
      {
        cidade: 'Dom Macedo Costa',
        ufId: 5,
      },
      {
        cidade: 'Dom Pedrito',
        ufId: 23,
      },
      {
        cidade: 'Dom Pedro',
        ufId: 10,
      },
      {
        cidade: 'Dom Pedro de Alcântara',
        ufId: 23,
      },
      {
        cidade: 'Dom Silvério',
        ufId: 11,
      },
      {
        cidade: 'Dom Viçoso',
        ufId: 11,
      },
      {
        cidade: 'Domingos Martins',
        ufId: 8,
      },
      {
        cidade: 'Domingos Mourão',
        ufId: 17,
      },
      {
        cidade: 'Dona Emma',
        ufId: 24,
      },
      {
        cidade: 'Dona Eusébia',
        ufId: 11,
      },
      {
        cidade: 'Dona Francisca',
        ufId: 23,
      },
      {
        cidade: 'Dona Inês',
        ufId: 15,
      },
      {
        cidade: 'Dores de Campos',
        ufId: 11,
      },
      {
        cidade: 'Dores de Guanhães',
        ufId: 11,
      },
      {
        cidade: 'Dores do Indaiá',
        ufId: 11,
      },
      {
        cidade: 'Dores do Rio Preto',
        ufId: 8,
      },
      {
        cidade: 'Dores do Turvo',
        ufId: 11,
      },
      {
        cidade: 'Doresópolis',
        ufId: 11,
      },
      {
        cidade: 'Dormentes',
        ufId: 16,
      },
      {
        cidade: 'Douradina',
        ufId: 12,
      },
      {
        cidade: 'Douradina',
        ufId: 18,
      },
      {
        cidade: 'Dourado',
        ufId: 26,
      },
      {
        cidade: 'Douradoquara',
        ufId: 11,
      },
      {
        cidade: 'Dourados',
        ufId: 12,
      },
      {
        cidade: 'Doutor Camargo',
        ufId: 18,
      },
      {
        cidade: 'Doutor Maurício Cardoso',
        ufId: 23,
      },
      {
        cidade: 'Doutor Pedrinho',
        ufId: 24,
      },
      {
        cidade: 'Doutor Ricardo',
        ufId: 23,
      },
      {
        cidade: 'Doutor Severiano',
        ufId: 20,
      },
      {
        cidade: 'Doutor Ulysses',
        ufId: 18,
      },
      {
        cidade: 'Doverlândia',
        ufId: 9,
      },
      {
        cidade: 'Dracena',
        ufId: 26,
      },
      {
        cidade: 'Duartina',
        ufId: 26,
      },
      {
        cidade: 'Duas Barras',
        ufId: 19,
      },
      {
        cidade: 'Duas Estradas',
        ufId: 15,
      },
      {
        cidade: 'Dueré',
        ufId: 27,
      },
      {
        cidade: 'Dumont',
        ufId: 26,
      },
      {
        cidade: 'Duque Bacelar',
        ufId: 10,
      },
      {
        cidade: 'Duque de Caxias',
        ufId: 19,
      },
      {
        cidade: 'Durandé',
        ufId: 11,
      },
      {
        cidade: 'Echaporã',
        ufId: 26,
      },
      {
        cidade: 'Ecoporanga',
        ufId: 8,
      },
      {
        cidade: 'Edealina',
        ufId: 9,
      },
      {
        cidade: 'Edéia',
        ufId: 9,
      },
      {
        cidade: 'Eirunepé',
        ufId: 3,
      },
      {
        cidade: 'Eldorado',
        ufId: 12,
      },
      {
        cidade: 'Eldorado',
        ufId: 26,
      },
      {
        cidade: 'Eldorado do Carajás',
        ufId: 14,
      },
      {
        cidade: 'Eldorado do Sul',
        ufId: 23,
      },
      {
        cidade: 'Elesbão Veloso',
        ufId: 17,
      },
      {
        cidade: 'Elias Fausto',
        ufId: 26,
      },
      {
        cidade: 'Eliseu Martins',
        ufId: 17,
      },
      {
        cidade: 'Elisiário',
        ufId: 26,
      },
      {
        cidade: 'Elísio Medrado',
        ufId: 5,
      },
      {
        cidade: 'Elói Mendes',
        ufId: 11,
      },
      {
        cidade: 'Emas',
        ufId: 15,
      },
      {
        cidade: 'Embaúba',
        ufId: 26,
      },
      {
        cidade: 'Embu das Artes',
        ufId: 26,
      },
      {
        cidade: 'Embu-Guaçu',
        ufId: 26,
      },
      {
        cidade: 'Emilianópolis',
        ufId: 26,
      },
      {
        cidade: 'Encantado',
        ufId: 23,
      },
      {
        cidade: 'Encanto',
        ufId: 20,
      },
      {
        cidade: 'Encruzilhada',
        ufId: 5,
      },
      {
        cidade: 'Encruzilhada do Sul',
        ufId: 23,
      },
      {
        cidade: 'Enéas Marques',
        ufId: 18,
      },
      {
        cidade: 'Engenheiro Beltrão',
        ufId: 18,
      },
      {
        cidade: 'Engenheiro Caldas',
        ufId: 11,
      },
      {
        cidade: 'Engenheiro Coelho',
        ufId: 26,
      },
      {
        cidade: 'Engenheiro Navarro',
        ufId: 11,
      },
      {
        cidade: 'Engenheiro Paulo de Frontin',
        ufId: 19,
      },
      {
        cidade: 'Engenho Velho',
        ufId: 23,
      },
      {
        cidade: 'Entre Folhas',
        ufId: 11,
      },
      {
        cidade: 'Entre Rios',
        ufId: 5,
      },
      {
        cidade: 'Entre Rios',
        ufId: 24,
      },
      {
        cidade: 'Entre Rios de Minas',
        ufId: 11,
      },
      {
        cidade: 'Entre Rios do Oeste',
        ufId: 18,
      },
      {
        cidade: 'Entre Rios do Sul',
        ufId: 23,
      },
      {
        cidade: 'Entre-Ijuís',
        ufId: 23,
      },
      {
        cidade: 'Envira',
        ufId: 3,
      },
      {
        cidade: 'Epitaciolândia',
        ufId: 1,
      },
      {
        cidade: 'Equador',
        ufId: 20,
      },
      {
        cidade: 'Erebango',
        ufId: 23,
      },
      {
        cidade: 'Erechim',
        ufId: 23,
      },
      {
        cidade: 'Ererê',
        ufId: 6,
      },
      {
        cidade: 'Érico Cardoso',
        ufId: 5,
      },
      {
        cidade: 'Ermo',
        ufId: 24,
      },
      {
        cidade: 'Ernestina',
        ufId: 23,
      },
      {
        cidade: 'Erval Grande',
        ufId: 23,
      },
      {
        cidade: 'Erval Seco',
        ufId: 23,
      },
      {
        cidade: 'Erval Velho',
        ufId: 24,
      },
      {
        cidade: 'Ervália',
        ufId: 11,
      },
      {
        cidade: 'Escada',
        ufId: 16,
      },
      {
        cidade: 'Esmeralda',
        ufId: 23,
      },
      {
        cidade: 'Esmeraldas',
        ufId: 11,
      },
      {
        cidade: 'Espera Feliz',
        ufId: 11,
      },
      {
        cidade: 'Esperança',
        ufId: 15,
      },
      {
        cidade: 'Esperança do Sul',
        ufId: 23,
      },
      {
        cidade: 'Esperança Nova',
        ufId: 18,
      },
      {
        cidade: 'Esperantina',
        ufId: 27,
      },
      {
        cidade: 'Esperantina',
        ufId: 17,
      },
      {
        cidade: 'Esperantinópolis',
        ufId: 10,
      },
      {
        cidade: 'Espigão Alto do Iguaçu',
        ufId: 18,
      },
      {
        cidade: "Espigão D'Oeste",
        ufId: 21,
      },
      {
        cidade: 'Espinosa',
        ufId: 11,
      },
      {
        cidade: 'Espírito Santo',
        ufId: 20,
      },
      {
        cidade: 'Espírito Santo do Dourado',
        ufId: 11,
      },
      {
        cidade: 'Espírito Santo do Pinhal',
        ufId: 26,
      },
      {
        cidade: 'Espírito Santo do Turvo',
        ufId: 26,
      },
      {
        cidade: 'Esplanada',
        ufId: 5,
      },
      {
        cidade: 'Espumoso',
        ufId: 23,
      },
      {
        cidade: 'Estação',
        ufId: 23,
      },
      {
        cidade: 'Estância',
        ufId: 25,
      },
      {
        cidade: 'Estância Velha',
        ufId: 23,
      },
      {
        cidade: 'Esteio',
        ufId: 23,
      },
      {
        cidade: 'Estiva',
        ufId: 11,
      },
      {
        cidade: 'Estiva Gerbi',
        ufId: 26,
      },
      {
        cidade: 'Estreito',
        ufId: 10,
      },
      {
        cidade: 'Estrela',
        ufId: 23,
      },
      {
        cidade: "Estrela d'Oeste",
        ufId: 26,
      },
      {
        cidade: 'Estrela Dalva',
        ufId: 11,
      },
      {
        cidade: 'Estrela de Alagoas',
        ufId: 2,
      },
      {
        cidade: 'Estrela do Indaiá',
        ufId: 11,
      },
      {
        cidade: 'Estrela do Norte',
        ufId: 9,
      },
      {
        cidade: 'Estrela do Norte',
        ufId: 26,
      },
      {
        cidade: 'Estrela do Sul',
        ufId: 11,
      },
      {
        cidade: 'Estrela Velha',
        ufId: 23,
      },
      {
        cidade: 'Euclides da Cunha',
        ufId: 5,
      },
      {
        cidade: 'Euclides da Cunha Paulista',
        ufId: 26,
      },
      {
        cidade: 'Eugênio de Castro',
        ufId: 23,
      },
      {
        cidade: 'Eugenópolis',
        ufId: 11,
      },
      {
        cidade: 'Eunápolis',
        ufId: 5,
      },
      {
        cidade: 'Eusébio',
        ufId: 6,
      },
      {
        cidade: 'Ewbank da Câmara',
        ufId: 11,
      },
      {
        cidade: 'Extrema',
        ufId: 11,
      },
      {
        cidade: 'Extremoz',
        ufId: 20,
      },
      {
        cidade: 'Exu',
        ufId: 16,
      },
      {
        cidade: 'Fagundes',
        ufId: 15,
      },
      {
        cidade: 'Fagundes Varela',
        ufId: 23,
      },
      {
        cidade: 'Faina',
        ufId: 9,
      },
      {
        cidade: 'Fama',
        ufId: 11,
      },
      {
        cidade: 'Faria Lemos',
        ufId: 11,
      },
      {
        cidade: 'Farias Brito',
        ufId: 6,
      },
      {
        cidade: 'Faro',
        ufId: 14,
      },
      {
        cidade: 'Farol',
        ufId: 18,
      },
      {
        cidade: 'Farroupilha',
        ufId: 23,
      },
      {
        cidade: 'Fartura',
        ufId: 26,
      },
      {
        cidade: 'Fartura do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Fátima',
        ufId: 27,
      },
      {
        cidade: 'Fátima',
        ufId: 5,
      },
      {
        cidade: 'Fátima do Sul',
        ufId: 12,
      },
      {
        cidade: 'Faxinal',
        ufId: 18,
      },
      {
        cidade: 'Faxinal do Soturno',
        ufId: 23,
      },
      {
        cidade: 'Faxinal dos Guedes',
        ufId: 24,
      },
      {
        cidade: 'Faxinalzinho',
        ufId: 23,
      },
      {
        cidade: 'Fazenda Nova',
        ufId: 9,
      },
      {
        cidade: 'Fazenda Rio Grande',
        ufId: 18,
      },
      {
        cidade: 'Fazenda Vilanova',
        ufId: 23,
      },
      {
        cidade: 'Feijó',
        ufId: 1,
      },
      {
        cidade: 'Feira da Mata',
        ufId: 5,
      },
      {
        cidade: 'Feira de Santana',
        ufId: 5,
      },
      {
        cidade: 'Feira Grande',
        ufId: 2,
      },
      {
        cidade: 'Feira Nova',
        ufId: 16,
      },
      {
        cidade: 'Feira Nova',
        ufId: 25,
      },
      {
        cidade: 'Feira Nova do Maranhão',
        ufId: 10,
      },
      {
        cidade: 'Felício dos Santos',
        ufId: 11,
      },
      {
        cidade: 'Felipe Guerra',
        ufId: 20,
      },
      {
        cidade: 'Felisburgo',
        ufId: 11,
      },
      {
        cidade: 'Felixlândia',
        ufId: 11,
      },
      {
        cidade: 'Feliz',
        ufId: 23,
      },
      {
        cidade: 'Feliz Deserto',
        ufId: 2,
      },
      {
        cidade: 'Feliz Natal',
        ufId: 13,
      },
      {
        cidade: 'Fênix',
        ufId: 18,
      },
      {
        cidade: 'Fernandes Pinheiro',
        ufId: 18,
      },
      {
        cidade: 'Fernandes Tourinho',
        ufId: 11,
      },
      {
        cidade: 'Fernando de Noronha',
        ufId: 16,
      },
      {
        cidade: 'Fernando Falcão',
        ufId: 10,
      },
      {
        cidade: 'Fernando Pedroza',
        ufId: 20,
      },
      {
        cidade: 'Fernando Prestes',
        ufId: 26,
      },
      {
        cidade: 'Fernandópolis',
        ufId: 26,
      },
      {
        cidade: 'Fernão',
        ufId: 26,
      },
      {
        cidade: 'Ferraz de Vasconcelos',
        ufId: 26,
      },
      {
        cidade: 'Ferreira Gomes',
        ufId: 4,
      },
      {
        cidade: 'Ferreiros',
        ufId: 16,
      },
      {
        cidade: 'Ferros',
        ufId: 11,
      },
      {
        cidade: 'Fervedouro',
        ufId: 11,
      },
      {
        cidade: 'Figueira',
        ufId: 18,
      },
      {
        cidade: 'Figueirão',
        ufId: 12,
      },
      {
        cidade: 'Figueirópolis',
        ufId: 27,
      },
      {
        cidade: "Figueirópolis D'Oeste",
        ufId: 13,
      },
      {
        cidade: 'Filadélfia',
        ufId: 27,
      },
      {
        cidade: 'Filadélfia',
        ufId: 5,
      },
      {
        cidade: 'Firmino Alves',
        ufId: 5,
      },
      {
        cidade: 'Firminópolis',
        ufId: 9,
      },
      {
        cidade: 'Flexeiras',
        ufId: 2,
      },
      {
        cidade: 'Flor da Serra do Sul',
        ufId: 18,
      },
      {
        cidade: 'Flor do Sertão',
        ufId: 24,
      },
      {
        cidade: 'Flora Rica',
        ufId: 26,
      },
      {
        cidade: 'Floraí',
        ufId: 18,
      },
      {
        cidade: 'Florânia',
        ufId: 20,
      },
      {
        cidade: 'Floreal',
        ufId: 26,
      },
      {
        cidade: 'Flores',
        ufId: 16,
      },
      {
        cidade: 'Flores da Cunha',
        ufId: 23,
      },
      {
        cidade: 'Flores de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Flores do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Floresta',
        ufId: 18,
      },
      {
        cidade: 'Floresta',
        ufId: 16,
      },
      {
        cidade: 'Floresta Azul',
        ufId: 5,
      },
      {
        cidade: 'Floresta do Araguaia',
        ufId: 14,
      },
      {
        cidade: 'Floresta do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Florestal',
        ufId: 11,
      },
      {
        cidade: 'Florestópolis',
        ufId: 18,
      },
      {
        cidade: 'Floriano',
        ufId: 17,
      },
      {
        cidade: 'Floriano Peixoto',
        ufId: 23,
      },
      {
        cidade: 'Florianópolis',
        ufId: 24,
      },
      {
        cidade: 'Flórida',
        ufId: 18,
      },
      {
        cidade: 'Flórida Paulista',
        ufId: 26,
      },
      {
        cidade: 'Florínia',
        ufId: 26,
      },
      {
        cidade: 'Fonte Boa',
        ufId: 3,
      },
      {
        cidade: 'Fontoura Xavier',
        ufId: 23,
      },
      {
        cidade: 'Formiga',
        ufId: 11,
      },
      {
        cidade: 'Formigueiro',
        ufId: 23,
      },
      {
        cidade: 'Formosa',
        ufId: 9,
      },
      {
        cidade: 'Formosa da Serra Negra',
        ufId: 10,
      },
      {
        cidade: 'Formosa do Oeste',
        ufId: 18,
      },
      {
        cidade: 'Formosa do Rio Preto',
        ufId: 5,
      },
      {
        cidade: 'Formosa do Sul',
        ufId: 24,
      },
      {
        cidade: 'Formoso',
        ufId: 9,
      },
      {
        cidade: 'Formoso',
        ufId: 11,
      },
      {
        cidade: 'Formoso do Araguaia',
        ufId: 27,
      },
      {
        cidade: 'Forquetinha',
        ufId: 23,
      },
      {
        cidade: 'Forquilha',
        ufId: 6,
      },
      {
        cidade: 'Forquilhinha',
        ufId: 24,
      },
      {
        cidade: 'Fortaleza',
        ufId: 6,
      },
      {
        cidade: 'Fortaleza de Minas',
        ufId: 11,
      },
      {
        cidade: 'Fortaleza do Tabocão',
        ufId: 27,
      },
      {
        cidade: 'Fortaleza dos Nogueiras',
        ufId: 10,
      },
      {
        cidade: 'Fortaleza dos Valos',
        ufId: 23,
      },
      {
        cidade: 'Fortim',
        ufId: 6,
      },
      {
        cidade: 'Fortuna',
        ufId: 10,
      },
      {
        cidade: 'Fortuna de Minas',
        ufId: 11,
      },
      {
        cidade: 'Foz do Iguaçu',
        ufId: 18,
      },
      {
        cidade: 'Foz do Jordão',
        ufId: 18,
      },
      {
        cidade: 'Fraiburgo',
        ufId: 24,
      },
      {
        cidade: 'Franca',
        ufId: 26,
      },
      {
        cidade: 'Francinópolis',
        ufId: 17,
      },
      {
        cidade: 'Francisco Alves',
        ufId: 18,
      },
      {
        cidade: 'Francisco Ayres',
        ufId: 17,
      },
      {
        cidade: 'Francisco Badaró',
        ufId: 11,
      },
      {
        cidade: 'Francisco Beltrão',
        ufId: 18,
      },
      {
        cidade: 'Francisco Dantas',
        ufId: 20,
      },
      {
        cidade: 'Francisco Dumont',
        ufId: 11,
      },
      {
        cidade: 'Francisco Macedo',
        ufId: 17,
      },
      {
        cidade: 'Francisco Morato',
        ufId: 26,
      },
      {
        cidade: 'Francisco Sá',
        ufId: 11,
      },
      {
        cidade: 'Francisco Santos',
        ufId: 17,
      },
      {
        cidade: 'Franciscópolis',
        ufId: 11,
      },
      {
        cidade: 'Franco da Rocha',
        ufId: 26,
      },
      {
        cidade: 'Frecheirinha',
        ufId: 6,
      },
      {
        cidade: 'Frederico Westphalen',
        ufId: 23,
      },
      {
        cidade: 'Frei Gaspar',
        ufId: 11,
      },
      {
        cidade: 'Frei Inocêncio',
        ufId: 11,
      },
      {
        cidade: 'Frei Lagonegro',
        ufId: 11,
      },
      {
        cidade: 'Frei Martinho',
        ufId: 15,
      },
      {
        cidade: 'Frei Miguelinho',
        ufId: 16,
      },
      {
        cidade: 'Frei Paulo',
        ufId: 25,
      },
      {
        cidade: 'Frei Rogério',
        ufId: 24,
      },
      {
        cidade: 'Fronteira',
        ufId: 11,
      },
      {
        cidade: 'Fronteira dos Vales',
        ufId: 11,
      },
      {
        cidade: 'Fronteiras',
        ufId: 17,
      },
      {
        cidade: 'Fruta de Leite',
        ufId: 11,
      },
      {
        cidade: 'Frutal',
        ufId: 11,
      },
      {
        cidade: 'Frutuoso Gomes',
        ufId: 20,
      },
      {
        cidade: 'Fundão',
        ufId: 8,
      },
      {
        cidade: 'Funilândia',
        ufId: 11,
      },
      {
        cidade: 'Gabriel Monteiro',
        ufId: 26,
      },
      {
        cidade: 'Gado Bravo',
        ufId: 15,
      },
      {
        cidade: 'Gália',
        ufId: 26,
      },
      {
        cidade: 'Galiléia',
        ufId: 11,
      },
      {
        cidade: 'Galinhos',
        ufId: 20,
      },
      {
        cidade: 'Galvão',
        ufId: 24,
      },
      {
        cidade: 'Gameleira',
        ufId: 16,
      },
      {
        cidade: 'Gameleira de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Gameleiras',
        ufId: 11,
      },
      {
        cidade: 'Gandu',
        ufId: 5,
      },
      {
        cidade: 'Garanhuns',
        ufId: 16,
      },
      {
        cidade: 'Gararu',
        ufId: 25,
      },
      {
        cidade: 'Garça',
        ufId: 26,
      },
      {
        cidade: 'Garibaldi',
        ufId: 23,
      },
      {
        cidade: 'Garopaba',
        ufId: 24,
      },
      {
        cidade: 'Garrafão do Norte',
        ufId: 14,
      },
      {
        cidade: 'Garruchos',
        ufId: 23,
      },
      {
        cidade: 'Garuva',
        ufId: 24,
      },
      {
        cidade: 'Gaspar',
        ufId: 24,
      },
      {
        cidade: 'Gastão Vidigal',
        ufId: 26,
      },
      {
        cidade: 'Gaúcha do Norte',
        ufId: 13,
      },
      {
        cidade: 'Gaurama',
        ufId: 23,
      },
      {
        cidade: 'Gavião',
        ufId: 5,
      },
      {
        cidade: 'Gavião Peixoto',
        ufId: 26,
      },
      {
        cidade: 'Geminiano',
        ufId: 17,
      },
      {
        cidade: 'General Câmara',
        ufId: 23,
      },
      {
        cidade: 'General Carneiro',
        ufId: 13,
      },
      {
        cidade: 'General Carneiro',
        ufId: 18,
      },
      {
        cidade: 'General Maynard',
        ufId: 25,
      },
      {
        cidade: 'General Salgado',
        ufId: 26,
      },
      {
        cidade: 'General Sampaio',
        ufId: 6,
      },
      {
        cidade: 'Gentil',
        ufId: 23,
      },
      {
        cidade: 'Gentio do Ouro',
        ufId: 5,
      },
      {
        cidade: 'Getulina',
        ufId: 26,
      },
      {
        cidade: 'Getúlio Vargas',
        ufId: 23,
      },
      {
        cidade: 'Gilbués',
        ufId: 17,
      },
      {
        cidade: 'Girau do Ponciano',
        ufId: 2,
      },
      {
        cidade: 'Giruá',
        ufId: 23,
      },
      {
        cidade: 'Glaucilândia',
        ufId: 11,
      },
      {
        cidade: 'Glicério',
        ufId: 26,
      },
      {
        cidade: 'Glória',
        ufId: 5,
      },
      {
        cidade: "Glória D'Oeste",
        ufId: 13,
      },
      {
        cidade: 'Glória de Dourados',
        ufId: 12,
      },
      {
        cidade: 'Glória do Goitá',
        ufId: 16,
      },
      {
        cidade: 'Glorinha',
        ufId: 23,
      },
      {
        cidade: 'Godofredo Viana',
        ufId: 10,
      },
      {
        cidade: 'Godoy Moreira',
        ufId: 18,
      },
      {
        cidade: 'Goiabeira',
        ufId: 11,
      },
      {
        cidade: 'Goianá',
        ufId: 11,
      },
      {
        cidade: 'Goiana',
        ufId: 16,
      },
      {
        cidade: 'Goianápolis',
        ufId: 9,
      },
      {
        cidade: 'Goiandira',
        ufId: 9,
      },
      {
        cidade: 'Goianésia',
        ufId: 9,
      },
      {
        cidade: 'Goianésia do Pará',
        ufId: 14,
      },
      {
        cidade: 'Goiânia',
        ufId: 9,
      },
      {
        cidade: 'Goianinha',
        ufId: 20,
      },
      {
        cidade: 'Goianira',
        ufId: 9,
      },
      {
        cidade: 'Goianorte',
        ufId: 27,
      },
      {
        cidade: 'Goiás',
        ufId: 9,
      },
      {
        cidade: 'Goiatins',
        ufId: 27,
      },
      {
        cidade: 'Goiatuba',
        ufId: 9,
      },
      {
        cidade: 'Goioerê',
        ufId: 18,
      },
      {
        cidade: 'Goioxim',
        ufId: 18,
      },
      {
        cidade: 'Gonçalves',
        ufId: 11,
      },
      {
        cidade: 'Gonçalves Dias',
        ufId: 10,
      },
      {
        cidade: 'Gongogi',
        ufId: 5,
      },
      {
        cidade: 'Gonzaga',
        ufId: 11,
      },
      {
        cidade: 'Gouveia',
        ufId: 11,
      },
      {
        cidade: 'Gouvelândia',
        ufId: 9,
      },
      {
        cidade: 'Governador Archer',
        ufId: 10,
      },
      {
        cidade: 'Governador Celso Ramos',
        ufId: 24,
      },
      {
        cidade: 'Governador Dix-Sept Rosado',
        ufId: 20,
      },
      {
        cidade: 'Governador Edison Lobão',
        ufId: 10,
      },
      {
        cidade: 'Governador Eugênio Barros',
        ufId: 10,
      },
      {
        cidade: 'Governador Jorge Teixeira',
        ufId: 21,
      },
      {
        cidade: 'Governador Lindenberg',
        ufId: 8,
      },
      {
        cidade: 'Governador Luiz Rocha',
        ufId: 10,
      },
      {
        cidade: 'Governador Mangabeira',
        ufId: 5,
      },
      {
        cidade: 'Governador Newton Bello',
        ufId: 10,
      },
      {
        cidade: 'Governador Nunes Freire',
        ufId: 10,
      },
      {
        cidade: 'Governador Valadares',
        ufId: 11,
      },
      {
        cidade: 'Graça',
        ufId: 6,
      },
      {
        cidade: 'Graça Aranha',
        ufId: 10,
      },
      {
        cidade: 'Gracho Cardoso',
        ufId: 25,
      },
      {
        cidade: 'Grajaú',
        ufId: 10,
      },
      {
        cidade: 'Gramado',
        ufId: 23,
      },
      {
        cidade: 'Gramado dos Loureiros',
        ufId: 23,
      },
      {
        cidade: 'Gramado Xavier',
        ufId: 23,
      },
      {
        cidade: 'Grandes Rios',
        ufId: 18,
      },
      {
        cidade: 'Granito',
        ufId: 16,
      },
      {
        cidade: 'Granja',
        ufId: 6,
      },
      {
        cidade: 'Granjeiro',
        ufId: 6,
      },
      {
        cidade: 'Grão Mogol',
        ufId: 11,
      },
      {
        cidade: 'Grão Pará',
        ufId: 24,
      },
      {
        cidade: 'Gravatá',
        ufId: 16,
      },
      {
        cidade: 'Gravataí',
        ufId: 23,
      },
      {
        cidade: 'Gravatal',
        ufId: 24,
      },
      {
        cidade: 'Groaíras',
        ufId: 6,
      },
      {
        cidade: 'Grossos',
        ufId: 20,
      },
      {
        cidade: 'Grupiara',
        ufId: 11,
      },
      {
        cidade: 'Guabiju',
        ufId: 23,
      },
      {
        cidade: 'Guabiruba',
        ufId: 24,
      },
      {
        cidade: 'Guaçuí',
        ufId: 8,
      },
      {
        cidade: 'Guadalupe',
        ufId: 17,
      },
      {
        cidade: 'Guaíba',
        ufId: 23,
      },
      {
        cidade: 'Guaiçara',
        ufId: 26,
      },
      {
        cidade: 'Guaimbê',
        ufId: 26,
      },
      {
        cidade: 'Guaíra',
        ufId: 26,
      },
      {
        cidade: 'Guaíra',
        ufId: 18,
      },
      {
        cidade: 'Guairaçá',
        ufId: 18,
      },
      {
        cidade: 'Guaiúba',
        ufId: 6,
      },
      {
        cidade: 'Guajará',
        ufId: 3,
      },
      {
        cidade: 'Guajará-Mirim',
        ufId: 21,
      },
      {
        cidade: 'Guajeru',
        ufId: 5,
      },
      {
        cidade: 'Guamaré',
        ufId: 20,
      },
      {
        cidade: 'Guamiranga',
        ufId: 18,
      },
      {
        cidade: 'Guanambi',
        ufId: 5,
      },
      {
        cidade: 'Guanhães',
        ufId: 11,
      },
      {
        cidade: 'Guapé',
        ufId: 11,
      },
      {
        cidade: 'Guapiaçu',
        ufId: 26,
      },
      {
        cidade: 'Guapiara',
        ufId: 26,
      },
      {
        cidade: 'Guapimirim',
        ufId: 19,
      },
      {
        cidade: 'Guapirama',
        ufId: 18,
      },
      {
        cidade: 'Guapó',
        ufId: 9,
      },
      {
        cidade: 'Guaporé',
        ufId: 23,
      },
      {
        cidade: 'Guaporema',
        ufId: 18,
      },
      {
        cidade: 'Guará',
        ufId: 26,
      },
      {
        cidade: 'Guarabira',
        ufId: 15,
      },
      {
        cidade: 'Guaraçaí',
        ufId: 26,
      },
      {
        cidade: 'Guaraci',
        ufId: 26,
      },
      {
        cidade: 'Guaraci',
        ufId: 18,
      },
      {
        cidade: 'Guaraciaba',
        ufId: 11,
      },
      {
        cidade: 'Guaraciaba',
        ufId: 24,
      },
      {
        cidade: 'Guaraciaba do Norte',
        ufId: 6,
      },
      {
        cidade: 'Guaraciama',
        ufId: 11,
      },
      {
        cidade: 'Guaraí',
        ufId: 27,
      },
      {
        cidade: 'Guaraíta',
        ufId: 9,
      },
      {
        cidade: 'Guaramiranga',
        ufId: 6,
      },
      {
        cidade: 'Guaramirim',
        ufId: 24,
      },
      {
        cidade: 'Guaranésia',
        ufId: 11,
      },
      {
        cidade: 'Guarani',
        ufId: 11,
      },
      {
        cidade: "Guarani d'Oeste",
        ufId: 26,
      },
      {
        cidade: 'Guarani das Missões',
        ufId: 23,
      },
      {
        cidade: 'Guarani de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Guaraniaçu',
        ufId: 18,
      },
      {
        cidade: 'Guarantã',
        ufId: 26,
      },
      {
        cidade: 'Guarantã do Norte',
        ufId: 13,
      },
      {
        cidade: 'Guarapari',
        ufId: 8,
      },
      {
        cidade: 'Guarapuava',
        ufId: 18,
      },
      {
        cidade: 'Guaraqueçaba',
        ufId: 18,
      },
      {
        cidade: 'Guarará',
        ufId: 11,
      },
      {
        cidade: 'Guararapes',
        ufId: 26,
      },
      {
        cidade: 'Guararema',
        ufId: 26,
      },
      {
        cidade: 'Guaratinga',
        ufId: 5,
      },
      {
        cidade: 'Guaratinguetá',
        ufId: 26,
      },
      {
        cidade: 'Guaratuba',
        ufId: 18,
      },
      {
        cidade: 'Guarda-Mor',
        ufId: 11,
      },
      {
        cidade: 'Guareí',
        ufId: 26,
      },
      {
        cidade: 'Guariba',
        ufId: 26,
      },
      {
        cidade: 'Guaribas',
        ufId: 17,
      },
      {
        cidade: 'Guarinos',
        ufId: 9,
      },
      {
        cidade: 'Guarujá',
        ufId: 26,
      },
      {
        cidade: 'Guarujá do Sul',
        ufId: 24,
      },
      {
        cidade: 'Guarulhos',
        ufId: 26,
      },
      {
        cidade: 'Guatambú',
        ufId: 24,
      },
      {
        cidade: 'Guatapará',
        ufId: 26,
      },
      {
        cidade: 'Guaxupé',
        ufId: 11,
      },
      {
        cidade: 'Guia Lopes da Laguna',
        ufId: 12,
      },
      {
        cidade: 'Guidoval',
        ufId: 11,
      },
      {
        cidade: 'Guimarães',
        ufId: 10,
      },
      {
        cidade: 'Guimarânia',
        ufId: 11,
      },
      {
        cidade: 'Guiratinga',
        ufId: 13,
      },
      {
        cidade: 'Guiricema',
        ufId: 11,
      },
      {
        cidade: 'Gurinhatã',
        ufId: 11,
      },
      {
        cidade: 'Gurinhém',
        ufId: 15,
      },
      {
        cidade: 'Gurjão',
        ufId: 15,
      },
      {
        cidade: 'Gurupá',
        ufId: 14,
      },
      {
        cidade: 'Gurupi',
        ufId: 27,
      },
      {
        cidade: 'Guzolândia',
        ufId: 26,
      },
      {
        cidade: 'Harmonia',
        ufId: 23,
      },
      {
        cidade: 'Heitoraí',
        ufId: 9,
      },
      {
        cidade: 'Heliodora',
        ufId: 11,
      },
      {
        cidade: 'Heliópolis',
        ufId: 5,
      },
      {
        cidade: 'Herculândia',
        ufId: 26,
      },
      {
        cidade: 'Herval',
        ufId: 23,
      },
      {
        cidade: "Herval d'Oeste",
        ufId: 24,
      },
      {
        cidade: 'Herveiras',
        ufId: 23,
      },
      {
        cidade: 'Hidrolândia',
        ufId: 9,
      },
      {
        cidade: 'Hidrolândia',
        ufId: 6,
      },
      {
        cidade: 'Hidrolina',
        ufId: 9,
      },
      {
        cidade: 'Holambra',
        ufId: 26,
      },
      {
        cidade: 'Honório Serpa',
        ufId: 18,
      },
      {
        cidade: 'Horizonte',
        ufId: 6,
      },
      {
        cidade: 'Horizontina',
        ufId: 23,
      },
      {
        cidade: 'Hortolândia',
        ufId: 26,
      },
      {
        cidade: 'Hugo Napoleão',
        ufId: 17,
      },
      {
        cidade: 'Hulha Negra',
        ufId: 23,
      },
      {
        cidade: 'Humaitá',
        ufId: 23,
      },
      {
        cidade: 'Humaitá',
        ufId: 3,
      },
      {
        cidade: 'Humberto de Campos',
        ufId: 10,
      },
      {
        cidade: 'Iacanga',
        ufId: 26,
      },
      {
        cidade: 'Iaciara',
        ufId: 9,
      },
      {
        cidade: 'Iacri',
        ufId: 26,
      },
      {
        cidade: 'Iaçu',
        ufId: 5,
      },
      {
        cidade: 'Iapu',
        ufId: 11,
      },
      {
        cidade: 'Iaras',
        ufId: 26,
      },
      {
        cidade: 'Iati',
        ufId: 16,
      },
      {
        cidade: 'Ibaiti',
        ufId: 18,
      },
      {
        cidade: 'Ibarama',
        ufId: 23,
      },
      {
        cidade: 'Ibaretama',
        ufId: 6,
      },
      {
        cidade: 'Ibaté',
        ufId: 26,
      },
      {
        cidade: 'Ibateguara',
        ufId: 2,
      },
      {
        cidade: 'Ibatiba',
        ufId: 8,
      },
      {
        cidade: 'Ibema',
        ufId: 18,
      },
      {
        cidade: 'Ibertioga',
        ufId: 11,
      },
      {
        cidade: 'Ibiá',
        ufId: 11,
      },
      {
        cidade: 'Ibiaçá',
        ufId: 23,
      },
      {
        cidade: 'Ibiaí',
        ufId: 11,
      },
      {
        cidade: 'Ibiam',
        ufId: 24,
      },
      {
        cidade: 'Ibiapina',
        ufId: 6,
      },
      {
        cidade: 'Ibiara',
        ufId: 15,
      },
      {
        cidade: 'Ibiassucê',
        ufId: 5,
      },
      {
        cidade: 'Ibicaraí',
        ufId: 5,
      },
      {
        cidade: 'Ibicaré',
        ufId: 24,
      },
      {
        cidade: 'Ibicoara',
        ufId: 5,
      },
      {
        cidade: 'Ibicuí',
        ufId: 5,
      },
      {
        cidade: 'Ibicuitinga',
        ufId: 6,
      },
      {
        cidade: 'Ibimirim',
        ufId: 16,
      },
      {
        cidade: 'Ibipeba',
        ufId: 5,
      },
      {
        cidade: 'Ibipitanga',
        ufId: 5,
      },
      {
        cidade: 'Ibiporã',
        ufId: 18,
      },
      {
        cidade: 'Ibiquera',
        ufId: 5,
      },
      {
        cidade: 'Ibirá',
        ufId: 26,
      },
      {
        cidade: 'Ibiracatu',
        ufId: 11,
      },
      {
        cidade: 'Ibiraci',
        ufId: 11,
      },
      {
        cidade: 'Ibiraçu',
        ufId: 8,
      },
      {
        cidade: 'Ibiraiaras',
        ufId: 23,
      },
      {
        cidade: 'Ibirajuba',
        ufId: 16,
      },
      {
        cidade: 'Ibirama',
        ufId: 24,
      },
      {
        cidade: 'Ibirapitanga',
        ufId: 5,
      },
      {
        cidade: 'Ibirapuã',
        ufId: 5,
      },
      {
        cidade: 'Ibirapuitã',
        ufId: 23,
      },
      {
        cidade: 'Ibirarema',
        ufId: 26,
      },
      {
        cidade: 'Ibirataia',
        ufId: 5,
      },
      {
        cidade: 'Ibirité',
        ufId: 11,
      },
      {
        cidade: 'Ibirubá',
        ufId: 23,
      },
      {
        cidade: 'Ibitiara',
        ufId: 5,
      },
      {
        cidade: 'Ibitinga',
        ufId: 26,
      },
      {
        cidade: 'Ibitirama',
        ufId: 8,
      },
      {
        cidade: 'Ibititá',
        ufId: 5,
      },
      {
        cidade: 'Ibitiúra de Minas',
        ufId: 11,
      },
      {
        cidade: 'Ibituruna',
        ufId: 11,
      },
      {
        cidade: 'Ibiúna',
        ufId: 26,
      },
      {
        cidade: 'Ibotirama',
        ufId: 5,
      },
      {
        cidade: 'Icapuí',
        ufId: 6,
      },
      {
        cidade: 'Içara',
        ufId: 24,
      },
      {
        cidade: 'Icaraí de Minas',
        ufId: 11,
      },
      {
        cidade: 'Icaraíma',
        ufId: 18,
      },
      {
        cidade: 'Icatu',
        ufId: 10,
      },
      {
        cidade: 'Icém',
        ufId: 26,
      },
      {
        cidade: 'Ichu',
        ufId: 5,
      },
      {
        cidade: 'Icó',
        ufId: 6,
      },
      {
        cidade: 'Iconha',
        ufId: 8,
      },
      {
        cidade: 'Ielmo Marinho',
        ufId: 20,
      },
      {
        cidade: 'Iepê',
        ufId: 26,
      },
      {
        cidade: 'Igaci',
        ufId: 2,
      },
      {
        cidade: 'Igaporã',
        ufId: 5,
      },
      {
        cidade: 'Igaraçu do Tietê',
        ufId: 26,
      },
      {
        cidade: 'Igaracy',
        ufId: 15,
      },
      {
        cidade: 'Igarapava',
        ufId: 26,
      },
      {
        cidade: 'Igarapé',
        ufId: 11,
      },
      {
        cidade: 'Igarapé do Meio',
        ufId: 10,
      },
      {
        cidade: 'Igarapé Grande',
        ufId: 10,
      },
      {
        cidade: 'Igarapé-Açu',
        ufId: 14,
      },
      {
        cidade: 'Igarapé-Miri',
        ufId: 14,
      },
      {
        cidade: 'Igarassu',
        ufId: 16,
      },
      {
        cidade: 'Igaratá',
        ufId: 26,
      },
      {
        cidade: 'Igaratinga',
        ufId: 11,
      },
      {
        cidade: 'Igrapiúna',
        ufId: 5,
      },
      {
        cidade: 'Igreja Nova',
        ufId: 2,
      },
      {
        cidade: 'Igrejinha',
        ufId: 23,
      },
      {
        cidade: 'Iguaba Grande',
        ufId: 19,
      },
      {
        cidade: 'Iguaí',
        ufId: 5,
      },
      {
        cidade: 'Iguape',
        ufId: 26,
      },
      {
        cidade: 'Iguaraçu',
        ufId: 18,
      },
      {
        cidade: 'Iguaracy',
        ufId: 16,
      },
      {
        cidade: 'Iguatama',
        ufId: 11,
      },
      {
        cidade: 'Iguatemi',
        ufId: 12,
      },
      {
        cidade: 'Iguatu',
        ufId: 6,
      },
      {
        cidade: 'Iguatu',
        ufId: 18,
      },
      {
        cidade: 'Ijaci',
        ufId: 11,
      },
      {
        cidade: 'Ijuí',
        ufId: 23,
      },
      {
        cidade: 'Ilha Comprida',
        ufId: 26,
      },
      {
        cidade: 'Ilha das Flores',
        ufId: 25,
      },
      {
        cidade: 'Ilha de Itamaracá',
        ufId: 16,
      },
      {
        cidade: 'Ilha Grande',
        ufId: 17,
      },
      {
        cidade: 'Ilha Solteira',
        ufId: 26,
      },
      {
        cidade: 'Ilhabela',
        ufId: 26,
      },
      {
        cidade: 'Ilhéus',
        ufId: 5,
      },
      {
        cidade: 'Ilhota',
        ufId: 24,
      },
      {
        cidade: 'Ilicínea',
        ufId: 11,
      },
      {
        cidade: 'Ilópolis',
        ufId: 23,
      },
      {
        cidade: 'Imaculada',
        ufId: 15,
      },
      {
        cidade: 'Imaruí',
        ufId: 24,
      },
      {
        cidade: 'Imbaú',
        ufId: 18,
      },
      {
        cidade: 'Imbé',
        ufId: 23,
      },
      {
        cidade: 'Imbé de Minas',
        ufId: 11,
      },
      {
        cidade: 'Imbituba',
        ufId: 24,
      },
      {
        cidade: 'Imbituva',
        ufId: 18,
      },
      {
        cidade: 'Imbuia',
        ufId: 24,
      },
      {
        cidade: 'Imigrante',
        ufId: 23,
      },
      {
        cidade: 'Imperatriz',
        ufId: 10,
      },
      {
        cidade: 'Inácio Martins',
        ufId: 18,
      },
      {
        cidade: 'Inaciolândia',
        ufId: 9,
      },
      {
        cidade: 'Inajá',
        ufId: 16,
      },
      {
        cidade: 'Inajá',
        ufId: 18,
      },
      {
        cidade: 'Inconfidentes',
        ufId: 11,
      },
      {
        cidade: 'Indaiabira',
        ufId: 11,
      },
      {
        cidade: 'Indaial',
        ufId: 24,
      },
      {
        cidade: 'Indaiatuba',
        ufId: 26,
      },
      {
        cidade: 'Independência',
        ufId: 23,
      },
      {
        cidade: 'Independência',
        ufId: 6,
      },
      {
        cidade: 'Indiana',
        ufId: 26,
      },
      {
        cidade: 'Indianópolis',
        ufId: 18,
      },
      {
        cidade: 'Indianópolis',
        ufId: 11,
      },
      {
        cidade: 'Indiaporã',
        ufId: 26,
      },
      {
        cidade: 'Indiara',
        ufId: 9,
      },
      {
        cidade: 'Indiaroba',
        ufId: 25,
      },
      {
        cidade: 'Indiavaí',
        ufId: 13,
      },
      {
        cidade: 'Ingá',
        ufId: 15,
      },
      {
        cidade: 'Ingaí',
        ufId: 11,
      },
      {
        cidade: 'Ingazeira',
        ufId: 16,
      },
      {
        cidade: 'Inhacorá',
        ufId: 23,
      },
      {
        cidade: 'Inhambupe',
        ufId: 5,
      },
      {
        cidade: 'Inhangapi',
        ufId: 14,
      },
      {
        cidade: 'Inhapi',
        ufId: 2,
      },
      {
        cidade: 'Inhapim',
        ufId: 11,
      },
      {
        cidade: 'Inhaúma',
        ufId: 11,
      },
      {
        cidade: 'Inhuma',
        ufId: 17,
      },
      {
        cidade: 'Inhumas',
        ufId: 9,
      },
      {
        cidade: 'Inimutaba',
        ufId: 11,
      },
      {
        cidade: 'Inocência',
        ufId: 12,
      },
      {
        cidade: 'Inúbia Paulista',
        ufId: 26,
      },
      {
        cidade: 'Iomerê',
        ufId: 24,
      },
      {
        cidade: 'Ipaba',
        ufId: 11,
      },
      {
        cidade: 'Ipameri',
        ufId: 9,
      },
      {
        cidade: 'Ipanema',
        ufId: 11,
      },
      {
        cidade: 'Ipanguaçu',
        ufId: 20,
      },
      {
        cidade: 'Ipaporanga',
        ufId: 6,
      },
      {
        cidade: 'Ipatinga',
        ufId: 11,
      },
      {
        cidade: 'Ipaumirim',
        ufId: 6,
      },
      {
        cidade: 'Ipaussu',
        ufId: 26,
      },
      {
        cidade: 'Ipê',
        ufId: 23,
      },
      {
        cidade: 'Ipecaetá',
        ufId: 5,
      },
      {
        cidade: 'Iperó',
        ufId: 26,
      },
      {
        cidade: 'Ipeúna',
        ufId: 26,
      },
      {
        cidade: 'Ipiaçu',
        ufId: 11,
      },
      {
        cidade: 'Ipiaú',
        ufId: 5,
      },
      {
        cidade: 'Ipiguá',
        ufId: 26,
      },
      {
        cidade: 'Ipirá',
        ufId: 5,
      },
      {
        cidade: 'Ipira',
        ufId: 24,
      },
      {
        cidade: 'Ipiranga',
        ufId: 18,
      },
      {
        cidade: 'Ipiranga de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Ipiranga do Norte',
        ufId: 13,
      },
      {
        cidade: 'Ipiranga do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Ipiranga do Sul',
        ufId: 23,
      },
      {
        cidade: 'Ipixuna',
        ufId: 3,
      },
      {
        cidade: 'Ipixuna do Pará',
        ufId: 14,
      },
      {
        cidade: 'Ipojuca',
        ufId: 16,
      },
      {
        cidade: 'Iporã',
        ufId: 18,
      },
      {
        cidade: 'Iporá',
        ufId: 9,
      },
      {
        cidade: 'Iporã do Oeste',
        ufId: 24,
      },
      {
        cidade: 'Iporanga',
        ufId: 26,
      },
      {
        cidade: 'Ipu',
        ufId: 6,
      },
      {
        cidade: 'Ipuã',
        ufId: 26,
      },
      {
        cidade: 'Ipuaçu',
        ufId: 24,
      },
      {
        cidade: 'Ipubi',
        ufId: 16,
      },
      {
        cidade: 'Ipueira',
        ufId: 20,
      },
      {
        cidade: 'Ipueiras',
        ufId: 27,
      },
      {
        cidade: 'Ipueiras',
        ufId: 6,
      },
      {
        cidade: 'Ipuiúna',
        ufId: 11,
      },
      {
        cidade: 'Ipumirim',
        ufId: 24,
      },
      {
        cidade: 'Ipupiara',
        ufId: 5,
      },
      {
        cidade: 'Iracema',
        ufId: 22,
      },
      {
        cidade: 'Iracema',
        ufId: 6,
      },
      {
        cidade: 'Iracema do Oeste',
        ufId: 18,
      },
      {
        cidade: 'Iracemápolis',
        ufId: 26,
      },
      {
        cidade: 'Iraceminha',
        ufId: 24,
      },
      {
        cidade: 'Iraí',
        ufId: 23,
      },
      {
        cidade: 'Iraí de Minas',
        ufId: 11,
      },
      {
        cidade: 'Irajuba',
        ufId: 5,
      },
      {
        cidade: 'Iramaia',
        ufId: 5,
      },
      {
        cidade: 'Iranduba',
        ufId: 3,
      },
      {
        cidade: 'Irani',
        ufId: 24,
      },
      {
        cidade: 'Irapuã',
        ufId: 26,
      },
      {
        cidade: 'Irapuru',
        ufId: 26,
      },
      {
        cidade: 'Iraquara',
        ufId: 5,
      },
      {
        cidade: 'Irará',
        ufId: 5,
      },
      {
        cidade: 'Irati',
        ufId: 18,
      },
      {
        cidade: 'Irati',
        ufId: 24,
      },
      {
        cidade: 'Irauçuba',
        ufId: 6,
      },
      {
        cidade: 'Irecê',
        ufId: 5,
      },
      {
        cidade: 'Iretama',
        ufId: 18,
      },
      {
        cidade: 'Irineópolis',
        ufId: 24,
      },
      {
        cidade: 'Irituia',
        ufId: 14,
      },
      {
        cidade: 'Irupi',
        ufId: 8,
      },
      {
        cidade: 'Isaías Coelho',
        ufId: 17,
      },
      {
        cidade: 'Israelândia',
        ufId: 9,
      },
      {
        cidade: 'Itá',
        ufId: 24,
      },
      {
        cidade: 'Itaara',
        ufId: 23,
      },
      {
        cidade: 'Itabaiana',
        ufId: 15,
      },
      {
        cidade: 'Itabaiana',
        ufId: 25,
      },
      {
        cidade: 'Itabaianinha',
        ufId: 25,
      },
      {
        cidade: 'Itabela',
        ufId: 5,
      },
      {
        cidade: 'Itaberá',
        ufId: 26,
      },
      {
        cidade: 'Itaberaba',
        ufId: 5,
      },
      {
        cidade: 'Itaberaí',
        ufId: 9,
      },
      {
        cidade: 'Itabi',
        ufId: 25,
      },
      {
        cidade: 'Itabira',
        ufId: 11,
      },
      {
        cidade: 'Itabirinha',
        ufId: 11,
      },
      {
        cidade: 'Itabirito',
        ufId: 11,
      },
      {
        cidade: 'Itaboraí',
        ufId: 19,
      },
      {
        cidade: 'Itabuna',
        ufId: 5,
      },
      {
        cidade: 'Itacajá',
        ufId: 27,
      },
      {
        cidade: 'Itacambira',
        ufId: 11,
      },
      {
        cidade: 'Itacarambi',
        ufId: 11,
      },
      {
        cidade: 'Itacaré',
        ufId: 5,
      },
      {
        cidade: 'Itacoatiara',
        ufId: 3,
      },
      {
        cidade: 'Itacuruba',
        ufId: 16,
      },
      {
        cidade: 'Itacurubi',
        ufId: 23,
      },
      {
        cidade: 'Itaeté',
        ufId: 5,
      },
      {
        cidade: 'Itagi',
        ufId: 5,
      },
      {
        cidade: 'Itagibá',
        ufId: 5,
      },
      {
        cidade: 'Itagimirim',
        ufId: 5,
      },
      {
        cidade: 'Itaguaçu',
        ufId: 8,
      },
      {
        cidade: 'Itaguaçu da Bahia',
        ufId: 5,
      },
      {
        cidade: 'Itaguaí',
        ufId: 19,
      },
      {
        cidade: 'Itaguajé',
        ufId: 18,
      },
      {
        cidade: 'Itaguara',
        ufId: 11,
      },
      {
        cidade: 'Itaguari',
        ufId: 9,
      },
      {
        cidade: 'Itaguaru',
        ufId: 9,
      },
      {
        cidade: 'Itaguatins',
        ufId: 27,
      },
      {
        cidade: 'Itaí',
        ufId: 26,
      },
      {
        cidade: 'Itaíba',
        ufId: 16,
      },
      {
        cidade: 'Itaiçaba',
        ufId: 6,
      },
      {
        cidade: 'Itainópolis',
        ufId: 17,
      },
      {
        cidade: 'Itaiópolis',
        ufId: 24,
      },
      {
        cidade: 'Itaipava do Grajaú',
        ufId: 10,
      },
      {
        cidade: 'Itaipé',
        ufId: 11,
      },
      {
        cidade: 'Itaipulândia',
        ufId: 18,
      },
      {
        cidade: 'Itaitinga',
        ufId: 6,
      },
      {
        cidade: 'Itaituba',
        ufId: 14,
      },
      {
        cidade: 'Itajá',
        ufId: 20,
      },
      {
        cidade: 'Itajá',
        ufId: 9,
      },
      {
        cidade: 'Itajaí',
        ufId: 24,
      },
      {
        cidade: 'Itajobi',
        ufId: 26,
      },
      {
        cidade: 'Itaju',
        ufId: 26,
      },
      {
        cidade: 'Itaju do Colônia',
        ufId: 5,
      },
      {
        cidade: 'Itajubá',
        ufId: 11,
      },
      {
        cidade: 'Itajuípe',
        ufId: 5,
      },
      {
        cidade: 'Italva',
        ufId: 19,
      },
      {
        cidade: 'Itamaraju',
        ufId: 5,
      },
      {
        cidade: 'Itamarandiba',
        ufId: 11,
      },
      {
        cidade: 'Itamarati',
        ufId: 3,
      },
      {
        cidade: 'Itamarati de Minas',
        ufId: 11,
      },
      {
        cidade: 'Itamari',
        ufId: 5,
      },
      {
        cidade: 'Itambacuri',
        ufId: 11,
      },
      {
        cidade: 'Itambaracá',
        ufId: 18,
      },
      {
        cidade: 'Itambé',
        ufId: 18,
      },
      {
        cidade: 'Itambé',
        ufId: 16,
      },
      {
        cidade: 'Itambé',
        ufId: 5,
      },
      {
        cidade: 'Itambé do Mato Dentro',
        ufId: 11,
      },
      {
        cidade: 'Itamogi',
        ufId: 11,
      },
      {
        cidade: 'Itamonte',
        ufId: 11,
      },
      {
        cidade: 'Itanagra',
        ufId: 5,
      },
      {
        cidade: 'Itanhaém',
        ufId: 26,
      },
      {
        cidade: 'Itanhandu',
        ufId: 11,
      },
      {
        cidade: 'Itanhangá',
        ufId: 13,
      },
      {
        cidade: 'Itanhém',
        ufId: 5,
      },
      {
        cidade: 'Itanhomi',
        ufId: 11,
      },
      {
        cidade: 'Itaobim',
        ufId: 11,
      },
      {
        cidade: 'Itaóca',
        ufId: 26,
      },
      {
        cidade: 'Itaocara',
        ufId: 19,
      },
      {
        cidade: 'Itapaci',
        ufId: 9,
      },
      {
        cidade: 'Itapagipe',
        ufId: 11,
      },
      {
        cidade: 'Itapajé',
        ufId: 6,
      },
      {
        cidade: 'Itaparica',
        ufId: 5,
      },
      {
        cidade: 'Itapé',
        ufId: 5,
      },
      {
        cidade: 'Itapebi',
        ufId: 5,
      },
      {
        cidade: 'Itapecerica',
        ufId: 11,
      },
      {
        cidade: 'Itapecerica da Serra',
        ufId: 26,
      },
      {
        cidade: 'Itapecuru Mirim',
        ufId: 10,
      },
      {
        cidade: "Itapejara d'Oeste",
        ufId: 18,
      },
      {
        cidade: 'Itapema',
        ufId: 24,
      },
      {
        cidade: 'Itapemirim',
        ufId: 8,
      },
      {
        cidade: 'Itaperuçu',
        ufId: 18,
      },
      {
        cidade: 'Itaperuna',
        ufId: 19,
      },
      {
        cidade: 'Itapetim',
        ufId: 16,
      },
      {
        cidade: 'Itapetinga',
        ufId: 5,
      },
      {
        cidade: 'Itapetininga',
        ufId: 26,
      },
      {
        cidade: 'Itapeva',
        ufId: 26,
      },
      {
        cidade: 'Itapeva',
        ufId: 11,
      },
      {
        cidade: 'Itapevi',
        ufId: 26,
      },
      {
        cidade: 'Itapicuru',
        ufId: 5,
      },
      {
        cidade: 'Itapipoca',
        ufId: 6,
      },
      {
        cidade: 'Itapira',
        ufId: 26,
      },
      {
        cidade: 'Itapiranga',
        ufId: 3,
      },
      {
        cidade: 'Itapiranga',
        ufId: 24,
      },
      {
        cidade: 'Itapirapuã',
        ufId: 9,
      },
      {
        cidade: 'Itapirapuã Paulista',
        ufId: 26,
      },
      {
        cidade: 'Itapiratins',
        ufId: 27,
      },
      {
        cidade: 'Itapissuma',
        ufId: 16,
      },
      {
        cidade: 'Itapitanga',
        ufId: 5,
      },
      {
        cidade: 'Itapiúna',
        ufId: 6,
      },
      {
        cidade: 'Itapoá',
        ufId: 24,
      },
      {
        cidade: 'Itápolis',
        ufId: 26,
      },
      {
        cidade: 'Itaporã',
        ufId: 12,
      },
      {
        cidade: 'Itaporã do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Itaporanga',
        ufId: 26,
      },
      {
        cidade: 'Itaporanga',
        ufId: 15,
      },
      {
        cidade: "Itaporanga d'Ajuda",
        ufId: 25,
      },
      {
        cidade: 'Itapororoca',
        ufId: 15,
      },
      {
        cidade: 'Itapuã do Oeste',
        ufId: 21,
      },
      {
        cidade: 'Itapuca',
        ufId: 23,
      },
      {
        cidade: 'Itapuí',
        ufId: 26,
      },
      {
        cidade: 'Itapura',
        ufId: 26,
      },
      {
        cidade: 'Itapuranga',
        ufId: 9,
      },
      {
        cidade: 'Itaquaquecetuba',
        ufId: 26,
      },
      {
        cidade: 'Itaquara',
        ufId: 5,
      },
      {
        cidade: 'Itaqui',
        ufId: 23,
      },
      {
        cidade: 'Itaquiraí',
        ufId: 12,
      },
      {
        cidade: 'Itaquitinga',
        ufId: 16,
      },
      {
        cidade: 'Itarana',
        ufId: 8,
      },
      {
        cidade: 'Itarantim',
        ufId: 5,
      },
      {
        cidade: 'Itararé',
        ufId: 26,
      },
      {
        cidade: 'Itarema',
        ufId: 6,
      },
      {
        cidade: 'Itariri',
        ufId: 26,
      },
      {
        cidade: 'Itarumã',
        ufId: 9,
      },
      {
        cidade: 'Itati',
        ufId: 23,
      },
      {
        cidade: 'Itatiaia',
        ufId: 19,
      },
      {
        cidade: 'Itatiaiuçu',
        ufId: 11,
      },
      {
        cidade: 'Itatiba',
        ufId: 26,
      },
      {
        cidade: 'Itatiba do Sul',
        ufId: 23,
      },
      {
        cidade: 'Itatim',
        ufId: 5,
      },
      {
        cidade: 'Itatinga',
        ufId: 26,
      },
      {
        cidade: 'Itatira',
        ufId: 6,
      },
      {
        cidade: 'Itatuba',
        ufId: 15,
      },
      {
        cidade: 'Itaú',
        ufId: 20,
      },
      {
        cidade: 'Itaú de Minas',
        ufId: 11,
      },
      {
        cidade: 'Itaúba',
        ufId: 13,
      },
      {
        cidade: 'Itaubal',
        ufId: 4,
      },
      {
        cidade: 'Itauçu',
        ufId: 9,
      },
      {
        cidade: 'Itaueira',
        ufId: 17,
      },
      {
        cidade: 'Itaúna',
        ufId: 11,
      },
      {
        cidade: 'Itaúna do Sul',
        ufId: 18,
      },
      {
        cidade: 'Itaverava',
        ufId: 11,
      },
      {
        cidade: 'Itinga',
        ufId: 11,
      },
      {
        cidade: 'Itinga do Maranhão',
        ufId: 10,
      },
      {
        cidade: 'Itiquira',
        ufId: 13,
      },
      {
        cidade: 'Itirapina',
        ufId: 26,
      },
      {
        cidade: 'Itirapuã',
        ufId: 26,
      },
      {
        cidade: 'Itiruçu',
        ufId: 5,
      },
      {
        cidade: 'Itiúba',
        ufId: 5,
      },
      {
        cidade: 'Itobi',
        ufId: 26,
      },
      {
        cidade: 'Itororó',
        ufId: 5,
      },
      {
        cidade: 'Itu',
        ufId: 26,
      },
      {
        cidade: 'Ituaçu',
        ufId: 5,
      },
      {
        cidade: 'Ituberá',
        ufId: 5,
      },
      {
        cidade: 'Itueta',
        ufId: 11,
      },
      {
        cidade: 'Ituiutaba',
        ufId: 11,
      },
      {
        cidade: 'Itumbiara',
        ufId: 9,
      },
      {
        cidade: 'Itumirim',
        ufId: 11,
      },
      {
        cidade: 'Itupeva',
        ufId: 26,
      },
      {
        cidade: 'Itupiranga',
        ufId: 14,
      },
      {
        cidade: 'Ituporanga',
        ufId: 24,
      },
      {
        cidade: 'Iturama',
        ufId: 11,
      },
      {
        cidade: 'Itutinga',
        ufId: 11,
      },
      {
        cidade: 'Ituverava',
        ufId: 26,
      },
      {
        cidade: 'Iuiú',
        ufId: 5,
      },
      {
        cidade: 'Iúna',
        ufId: 8,
      },
      {
        cidade: 'Ivaí',
        ufId: 18,
      },
      {
        cidade: 'Ivaiporã',
        ufId: 18,
      },
      {
        cidade: 'Ivaté',
        ufId: 18,
      },
      {
        cidade: 'Ivatuba',
        ufId: 18,
      },
      {
        cidade: 'Ivinhema',
        ufId: 12,
      },
      {
        cidade: 'Ivolândia',
        ufId: 9,
      },
      {
        cidade: 'Ivorá',
        ufId: 23,
      },
      {
        cidade: 'Ivoti',
        ufId: 23,
      },
      {
        cidade: 'Jaboatão dos Guararapes',
        ufId: 16,
      },
      {
        cidade: 'Jaborá',
        ufId: 24,
      },
      {
        cidade: 'Jaborandi',
        ufId: 5,
      },
      {
        cidade: 'Jaborandi',
        ufId: 26,
      },
      {
        cidade: 'Jaboti',
        ufId: 18,
      },
      {
        cidade: 'Jaboticaba',
        ufId: 23,
      },
      {
        cidade: 'Jaboticabal',
        ufId: 26,
      },
      {
        cidade: 'Jaboticatubas',
        ufId: 11,
      },
      {
        cidade: 'Jaçanã',
        ufId: 20,
      },
      {
        cidade: 'Jacaraci',
        ufId: 5,
      },
      {
        cidade: 'Jacaraú',
        ufId: 15,
      },
      {
        cidade: 'Jacaré dos Homens',
        ufId: 2,
      },
      {
        cidade: 'Jacareacanga',
        ufId: 14,
      },
      {
        cidade: 'Jacareí',
        ufId: 26,
      },
      {
        cidade: 'Jacarezinho',
        ufId: 18,
      },
      {
        cidade: 'Jaci',
        ufId: 26,
      },
      {
        cidade: 'Jaciara',
        ufId: 13,
      },
      {
        cidade: 'Jacinto',
        ufId: 11,
      },
      {
        cidade: 'Jacinto Machado',
        ufId: 24,
      },
      {
        cidade: 'Jacobina',
        ufId: 5,
      },
      {
        cidade: 'Jacobina do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Jacuí',
        ufId: 11,
      },
      {
        cidade: 'Jacuípe',
        ufId: 2,
      },
      {
        cidade: 'Jacuizinho',
        ufId: 23,
      },
      {
        cidade: 'Jacundá',
        ufId: 14,
      },
      {
        cidade: 'Jacupiranga',
        ufId: 26,
      },
      {
        cidade: 'Jacutinga',
        ufId: 23,
      },
      {
        cidade: 'Jacutinga',
        ufId: 11,
      },
      {
        cidade: 'Jaguapitã',
        ufId: 18,
      },
      {
        cidade: 'Jaguaquara',
        ufId: 5,
      },
      {
        cidade: 'Jaguaraçu',
        ufId: 11,
      },
      {
        cidade: 'Jaguarão',
        ufId: 23,
      },
      {
        cidade: 'Jaguarari',
        ufId: 5,
      },
      {
        cidade: 'Jaguaré',
        ufId: 8,
      },
      {
        cidade: 'Jaguaretama',
        ufId: 6,
      },
      {
        cidade: 'Jaguari',
        ufId: 23,
      },
      {
        cidade: 'Jaguariaíva',
        ufId: 18,
      },
      {
        cidade: 'Jaguaribara',
        ufId: 6,
      },
      {
        cidade: 'Jaguaribe',
        ufId: 6,
      },
      {
        cidade: 'Jaguaripe',
        ufId: 5,
      },
      {
        cidade: 'Jaguariúna',
        ufId: 26,
      },
      {
        cidade: 'Jaguaruana',
        ufId: 6,
      },
      {
        cidade: 'Jaguaruna',
        ufId: 24,
      },
      {
        cidade: 'Jaíba',
        ufId: 11,
      },
      {
        cidade: 'Jaicós',
        ufId: 17,
      },
      {
        cidade: 'Jales',
        ufId: 26,
      },
      {
        cidade: 'Jambeiro',
        ufId: 26,
      },
      {
        cidade: 'Jampruca',
        ufId: 11,
      },
      {
        cidade: 'Janaúba',
        ufId: 11,
      },
      {
        cidade: 'Jandaia',
        ufId: 9,
      },
      {
        cidade: 'Jandaia do Sul',
        ufId: 18,
      },
      {
        cidade: 'Jandaíra',
        ufId: 20,
      },
      {
        cidade: 'Jandaíra',
        ufId: 5,
      },
      {
        cidade: 'Jandira',
        ufId: 26,
      },
      {
        cidade: 'Janduís',
        ufId: 20,
      },
      {
        cidade: 'Jangada',
        ufId: 13,
      },
      {
        cidade: 'Janiópolis',
        ufId: 18,
      },
      {
        cidade: 'Januária',
        ufId: 11,
      },
      {
        cidade: 'Januário Cicco (Boa Saúde)',
        ufId: 20,
      },
      {
        cidade: 'Japaraíba',
        ufId: 11,
      },
      {
        cidade: 'Japaratinga',
        ufId: 2,
      },
      {
        cidade: 'Japaratuba',
        ufId: 25,
      },
      {
        cidade: 'Japeri',
        ufId: 19,
      },
      {
        cidade: 'Japi',
        ufId: 20,
      },
      {
        cidade: 'Japira',
        ufId: 18,
      },
      {
        cidade: 'Japoatã',
        ufId: 25,
      },
      {
        cidade: 'Japonvar',
        ufId: 11,
      },
      {
        cidade: 'Japorã',
        ufId: 12,
      },
      {
        cidade: 'Japurá',
        ufId: 18,
      },
      {
        cidade: 'Japurá',
        ufId: 3,
      },
      {
        cidade: 'Jaqueira',
        ufId: 16,
      },
      {
        cidade: 'Jaquirana',
        ufId: 23,
      },
      {
        cidade: 'Jaraguá',
        ufId: 9,
      },
      {
        cidade: 'Jaraguá do Sul',
        ufId: 24,
      },
      {
        cidade: 'Jaraguari',
        ufId: 12,
      },
      {
        cidade: 'Jaramataia',
        ufId: 2,
      },
      {
        cidade: 'Jardim',
        ufId: 6,
      },
      {
        cidade: 'Jardim',
        ufId: 12,
      },
      {
        cidade: 'Jardim Alegre',
        ufId: 18,
      },
      {
        cidade: 'Jardim de Angicos',
        ufId: 20,
      },
      {
        cidade: 'Jardim de Piranhas',
        ufId: 20,
      },
      {
        cidade: 'Jardim do Mulato',
        ufId: 17,
      },
      {
        cidade: 'Jardim do Seridó',
        ufId: 20,
      },
      {
        cidade: 'Jardim Olinda',
        ufId: 18,
      },
      {
        cidade: 'Jardinópolis',
        ufId: 26,
      },
      {
        cidade: 'Jardinópolis',
        ufId: 24,
      },
      {
        cidade: 'Jari',
        ufId: 23,
      },
      {
        cidade: 'Jarinu',
        ufId: 26,
      },
      {
        cidade: 'Jaru',
        ufId: 21,
      },
      {
        cidade: 'Jataí',
        ufId: 9,
      },
      {
        cidade: 'Jataizinho',
        ufId: 18,
      },
      {
        cidade: 'Jataúba',
        ufId: 16,
      },
      {
        cidade: 'Jateí',
        ufId: 12,
      },
      {
        cidade: 'Jati',
        ufId: 6,
      },
      {
        cidade: 'Jatobá',
        ufId: 10,
      },
      {
        cidade: 'Jatobá',
        ufId: 16,
      },
      {
        cidade: 'Jatobá do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Jaú',
        ufId: 26,
      },
      {
        cidade: 'Jaú do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Jaupaci',
        ufId: 9,
      },
      {
        cidade: 'Jauru',
        ufId: 13,
      },
      {
        cidade: 'Jeceaba',
        ufId: 11,
      },
      {
        cidade: 'Jenipapo de Minas',
        ufId: 11,
      },
      {
        cidade: 'Jenipapo dos Vieiras',
        ufId: 10,
      },
      {
        cidade: 'Jequeri',
        ufId: 11,
      },
      {
        cidade: 'Jequiá da Praia',
        ufId: 2,
      },
      {
        cidade: 'Jequié',
        ufId: 5,
      },
      {
        cidade: 'Jequitaí',
        ufId: 11,
      },
      {
        cidade: 'Jequitibá',
        ufId: 11,
      },
      {
        cidade: 'Jequitinhonha',
        ufId: 11,
      },
      {
        cidade: 'Jeremoabo',
        ufId: 5,
      },
      {
        cidade: 'Jericó',
        ufId: 15,
      },
      {
        cidade: 'Jeriquara',
        ufId: 26,
      },
      {
        cidade: 'Jerônimo Monteiro',
        ufId: 8,
      },
      {
        cidade: 'Jerumenha',
        ufId: 17,
      },
      {
        cidade: 'Jesuânia',
        ufId: 11,
      },
      {
        cidade: 'Jesuítas',
        ufId: 18,
      },
      {
        cidade: 'Jesúpolis',
        ufId: 9,
      },
      {
        cidade: 'Ji-Paraná',
        ufId: 21,
      },
      {
        cidade: 'Jijoca de Jericoacoara',
        ufId: 6,
      },
      {
        cidade: 'Jiquiriçá',
        ufId: 5,
      },
      {
        cidade: 'Jitaúna',
        ufId: 5,
      },
      {
        cidade: 'Joaçaba',
        ufId: 24,
      },
      {
        cidade: 'Joaíma',
        ufId: 11,
      },
      {
        cidade: 'Joanésia',
        ufId: 11,
      },
      {
        cidade: 'Joanópolis',
        ufId: 26,
      },
      {
        cidade: 'João Alfredo',
        ufId: 16,
      },
      {
        cidade: 'João Câmara',
        ufId: 20,
      },
      {
        cidade: 'João Costa',
        ufId: 17,
      },
      {
        cidade: 'João Dias',
        ufId: 20,
      },
      {
        cidade: 'João Dourado',
        ufId: 5,
      },
      {
        cidade: 'João Lisboa',
        ufId: 10,
      },
      {
        cidade: 'João Monlevade',
        ufId: 11,
      },
      {
        cidade: 'João Neiva',
        ufId: 8,
      },
      {
        cidade: 'João Pessoa',
        ufId: 15,
      },
      {
        cidade: 'João Pinheiro',
        ufId: 11,
      },
      {
        cidade: 'João Ramalho',
        ufId: 26,
      },
      {
        cidade: 'Joaquim Felício',
        ufId: 11,
      },
      {
        cidade: 'Joaquim Gomes',
        ufId: 2,
      },
      {
        cidade: 'Joaquim Nabuco',
        ufId: 16,
      },
      {
        cidade: 'Joaquim Pires',
        ufId: 17,
      },
      {
        cidade: 'Joaquim Távora',
        ufId: 18,
      },
      {
        cidade: 'Joca Claudino',
        ufId: 15,
      },
      {
        cidade: 'Joca Marques',
        ufId: 17,
      },
      {
        cidade: 'Jóia',
        ufId: 23,
      },
      {
        cidade: 'Joinville',
        ufId: 24,
      },
      {
        cidade: 'Jordânia',
        ufId: 11,
      },
      {
        cidade: 'Jordão',
        ufId: 1,
      },
      {
        cidade: 'José Boiteux',
        ufId: 24,
      },
      {
        cidade: 'José Bonifácio',
        ufId: 26,
      },
      {
        cidade: 'José da Penha',
        ufId: 20,
      },
      {
        cidade: 'José de Freitas',
        ufId: 17,
      },
      {
        cidade: 'José Gonçalves de Minas',
        ufId: 11,
      },
      {
        cidade: 'José Raydan',
        ufId: 11,
      },
      {
        cidade: 'Joselândia',
        ufId: 10,
      },
      {
        cidade: 'Josenópolis',
        ufId: 11,
      },
      {
        cidade: 'Joviânia',
        ufId: 9,
      },
      {
        cidade: 'Juara',
        ufId: 13,
      },
      {
        cidade: 'Juarez Távora',
        ufId: 15,
      },
      {
        cidade: 'Juarina',
        ufId: 27,
      },
      {
        cidade: 'Juatuba',
        ufId: 11,
      },
      {
        cidade: 'Juazeirinho',
        ufId: 15,
      },
      {
        cidade: 'Juazeiro',
        ufId: 5,
      },
      {
        cidade: 'Juazeiro do Norte',
        ufId: 6,
      },
      {
        cidade: 'Juazeiro do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Jucás',
        ufId: 6,
      },
      {
        cidade: 'Jucati',
        ufId: 16,
      },
      {
        cidade: 'Jucuruçu',
        ufId: 5,
      },
      {
        cidade: 'Jucurutu',
        ufId: 20,
      },
      {
        cidade: 'Juína',
        ufId: 13,
      },
      {
        cidade: 'Juiz de Fora',
        ufId: 11,
      },
      {
        cidade: 'Júlio Borges',
        ufId: 17,
      },
      {
        cidade: 'Júlio de Castilhos',
        ufId: 23,
      },
      {
        cidade: 'Júlio Mesquita',
        ufId: 26,
      },
      {
        cidade: 'Jumirim',
        ufId: 26,
      },
      {
        cidade: 'Junco do Maranhão',
        ufId: 10,
      },
      {
        cidade: 'Junco do Seridó',
        ufId: 15,
      },
      {
        cidade: 'Jundiá',
        ufId: 20,
      },
      {
        cidade: 'Jundiá',
        ufId: 2,
      },
      {
        cidade: 'Jundiaí',
        ufId: 26,
      },
      {
        cidade: 'Jundiaí do Sul',
        ufId: 18,
      },
      {
        cidade: 'Junqueiro',
        ufId: 2,
      },
      {
        cidade: 'Junqueirópolis',
        ufId: 26,
      },
      {
        cidade: 'Jupi',
        ufId: 16,
      },
      {
        cidade: 'Jupiá',
        ufId: 24,
      },
      {
        cidade: 'Juquiá',
        ufId: 26,
      },
      {
        cidade: 'Juquitiba',
        ufId: 26,
      },
      {
        cidade: 'Juramento',
        ufId: 11,
      },
      {
        cidade: 'Juranda',
        ufId: 18,
      },
      {
        cidade: 'Jurema',
        ufId: 16,
      },
      {
        cidade: 'Jurema',
        ufId: 17,
      },
      {
        cidade: 'Juripiranga',
        ufId: 15,
      },
      {
        cidade: 'Juru',
        ufId: 15,
      },
      {
        cidade: 'Juruá',
        ufId: 3,
      },
      {
        cidade: 'Juruaia',
        ufId: 11,
      },
      {
        cidade: 'Juruena',
        ufId: 13,
      },
      {
        cidade: 'Juruti',
        ufId: 14,
      },
      {
        cidade: 'Juscimeira',
        ufId: 13,
      },
      {
        cidade: 'Jussara',
        ufId: 5,
      },
      {
        cidade: 'Jussara',
        ufId: 9,
      },
      {
        cidade: 'Jussara',
        ufId: 18,
      },
      {
        cidade: 'Jussari',
        ufId: 5,
      },
      {
        cidade: 'Jussiape',
        ufId: 5,
      },
      {
        cidade: 'Jutaí',
        ufId: 3,
      },
      {
        cidade: 'Juti',
        ufId: 12,
      },
      {
        cidade: 'Juvenília',
        ufId: 11,
      },
      {
        cidade: 'Kaloré',
        ufId: 18,
      },
      {
        cidade: 'Lábrea',
        ufId: 3,
      },
      {
        cidade: 'Lacerdópolis',
        ufId: 24,
      },
      {
        cidade: 'Ladainha',
        ufId: 11,
      },
      {
        cidade: 'Ladário',
        ufId: 12,
      },
      {
        cidade: 'Lafaiete Coutinho',
        ufId: 5,
      },
      {
        cidade: 'Lagamar',
        ufId: 11,
      },
      {
        cidade: 'Lagarto',
        ufId: 25,
      },
      {
        cidade: 'Lages',
        ufId: 24,
      },
      {
        cidade: 'Lago da Pedra',
        ufId: 10,
      },
      {
        cidade: 'Lago do Junco',
        ufId: 10,
      },
      {
        cidade: 'Lago dos Rodrigues',
        ufId: 10,
      },
      {
        cidade: 'Lago Verde',
        ufId: 10,
      },
      {
        cidade: 'Lagoa',
        ufId: 15,
      },
      {
        cidade: 'Lagoa Alegre',
        ufId: 17,
      },
      {
        cidade: 'Lagoa Bonita do Sul',
        ufId: 23,
      },
      {
        cidade: "Lagoa d'Anta",
        ufId: 20,
      },
      {
        cidade: 'Lagoa da Canoa',
        ufId: 2,
      },
      {
        cidade: 'Lagoa da Confusão',
        ufId: 27,
      },
      {
        cidade: 'Lagoa da Prata',
        ufId: 11,
      },
      {
        cidade: 'Lagoa de Dentro',
        ufId: 15,
      },
      {
        cidade: 'Lagoa de Itaenga',
        ufId: 16,
      },
      {
        cidade: 'Lagoa de Pedras',
        ufId: 20,
      },
      {
        cidade: 'Lagoa de São Francisco',
        ufId: 17,
      },
      {
        cidade: 'Lagoa de Velhos',
        ufId: 20,
      },
      {
        cidade: 'Lagoa do Barro do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Lagoa do Carro',
        ufId: 16,
      },
      {
        cidade: 'Lagoa do Mato',
        ufId: 10,
      },
      {
        cidade: 'Lagoa do Ouro',
        ufId: 16,
      },
      {
        cidade: 'Lagoa do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Lagoa do Sítio',
        ufId: 17,
      },
      {
        cidade: 'Lagoa do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Lagoa dos Gatos',
        ufId: 16,
      },
      {
        cidade: 'Lagoa dos Patos',
        ufId: 11,
      },
      {
        cidade: 'Lagoa dos Três Cantos',
        ufId: 23,
      },
      {
        cidade: 'Lagoa Dourada',
        ufId: 11,
      },
      {
        cidade: 'Lagoa Formosa',
        ufId: 11,
      },
      {
        cidade: 'Lagoa Grande',
        ufId: 11,
      },
      {
        cidade: 'Lagoa Grande',
        ufId: 16,
      },
      {
        cidade: 'Lagoa Grande do Maranhão',
        ufId: 10,
      },
      {
        cidade: 'Lagoa Nova',
        ufId: 20,
      },
      {
        cidade: 'Lagoa Real',
        ufId: 5,
      },
      {
        cidade: 'Lagoa Salgada',
        ufId: 20,
      },
      {
        cidade: 'Lagoa Santa',
        ufId: 9,
      },
      {
        cidade: 'Lagoa Santa',
        ufId: 11,
      },
      {
        cidade: 'Lagoa Seca',
        ufId: 15,
      },
      {
        cidade: 'Lagoa Vermelha',
        ufId: 23,
      },
      {
        cidade: 'Lagoão',
        ufId: 23,
      },
      {
        cidade: 'Lagoinha',
        ufId: 26,
      },
      {
        cidade: 'Lagoinha do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Laguna',
        ufId: 24,
      },
      {
        cidade: 'Laguna Carapã',
        ufId: 12,
      },
      {
        cidade: 'Laje',
        ufId: 5,
      },
      {
        cidade: 'Laje do Muriaé',
        ufId: 19,
      },
      {
        cidade: 'Lajeado',
        ufId: 27,
      },
      {
        cidade: 'Lajeado',
        ufId: 23,
      },
      {
        cidade: 'Lajeado do Bugre',
        ufId: 23,
      },
      {
        cidade: 'Lajeado Grande',
        ufId: 24,
      },
      {
        cidade: 'Lajeado Novo',
        ufId: 10,
      },
      {
        cidade: 'Lajedão',
        ufId: 5,
      },
      {
        cidade: 'Lajedinho',
        ufId: 5,
      },
      {
        cidade: 'Lajedo',
        ufId: 16,
      },
      {
        cidade: 'Lajedo do Tabocal',
        ufId: 5,
      },
      {
        cidade: 'Lajes',
        ufId: 20,
      },
      {
        cidade: 'Lajes Pintadas',
        ufId: 20,
      },
      {
        cidade: 'Lajinha',
        ufId: 11,
      },
      {
        cidade: 'Lamarão',
        ufId: 5,
      },
      {
        cidade: 'Lambari',
        ufId: 11,
      },
      {
        cidade: "Lambari D'Oeste",
        ufId: 13,
      },
      {
        cidade: 'Lamim',
        ufId: 11,
      },
      {
        cidade: 'Landri Sales',
        ufId: 17,
      },
      {
        cidade: 'Lapa',
        ufId: 18,
      },
      {
        cidade: 'Lapão',
        ufId: 5,
      },
      {
        cidade: 'Laranja da Terra',
        ufId: 8,
      },
      {
        cidade: 'Laranjal',
        ufId: 11,
      },
      {
        cidade: 'Laranjal',
        ufId: 18,
      },
      {
        cidade: 'Laranjal do Jari',
        ufId: 4,
      },
      {
        cidade: 'Laranjal Paulista',
        ufId: 26,
      },
      {
        cidade: 'Laranjeiras',
        ufId: 25,
      },
      {
        cidade: 'Laranjeiras do Sul',
        ufId: 18,
      },
      {
        cidade: 'Lassance',
        ufId: 11,
      },
      {
        cidade: 'Lastro',
        ufId: 15,
      },
      {
        cidade: 'Laurentino',
        ufId: 24,
      },
      {
        cidade: 'Lauro de Freitas',
        ufId: 5,
      },
      {
        cidade: 'Lauro Muller',
        ufId: 24,
      },
      {
        cidade: 'Lavandeira',
        ufId: 27,
      },
      {
        cidade: 'Lavínia',
        ufId: 26,
      },
      {
        cidade: 'Lavras',
        ufId: 11,
      },
      {
        cidade: 'Lavras da Mangabeira',
        ufId: 6,
      },
      {
        cidade: 'Lavras do Sul',
        ufId: 23,
      },
      {
        cidade: 'Lavrinhas',
        ufId: 26,
      },
      {
        cidade: 'Leandro Ferreira',
        ufId: 11,
      },
      {
        cidade: 'Lebon Régis',
        ufId: 24,
      },
      {
        cidade: 'Leme',
        ufId: 26,
      },
      {
        cidade: 'Leme do Prado',
        ufId: 11,
      },
      {
        cidade: 'Lençóis',
        ufId: 5,
      },
      {
        cidade: 'Lençóis Paulista',
        ufId: 26,
      },
      {
        cidade: 'Leoberto Leal',
        ufId: 24,
      },
      {
        cidade: 'Leopoldina',
        ufId: 11,
      },
      {
        cidade: 'Leopoldo de Bulhões',
        ufId: 9,
      },
      {
        cidade: 'Leópolis',
        ufId: 18,
      },
      {
        cidade: 'Liberato Salzano',
        ufId: 23,
      },
      {
        cidade: 'Liberdade',
        ufId: 11,
      },
      {
        cidade: 'Licínio de Almeida',
        ufId: 5,
      },
      {
        cidade: 'Lidianópolis',
        ufId: 18,
      },
      {
        cidade: 'Lima Campos',
        ufId: 10,
      },
      {
        cidade: 'Lima Duarte',
        ufId: 11,
      },
      {
        cidade: 'Limeira',
        ufId: 26,
      },
      {
        cidade: 'Limeira do Oeste',
        ufId: 11,
      },
      {
        cidade: 'Limoeiro',
        ufId: 16,
      },
      {
        cidade: 'Limoeiro de Anadia',
        ufId: 2,
      },
      {
        cidade: 'Limoeiro do Ajuru',
        ufId: 14,
      },
      {
        cidade: 'Limoeiro do Norte',
        ufId: 6,
      },
      {
        cidade: 'Lindoeste',
        ufId: 18,
      },
      {
        cidade: 'Lindóia',
        ufId: 26,
      },
      {
        cidade: 'Lindóia do Sul',
        ufId: 24,
      },
      {
        cidade: 'Lindolfo Collor',
        ufId: 23,
      },
      {
        cidade: 'Linha Nova',
        ufId: 23,
      },
      {
        cidade: 'Linhares',
        ufId: 8,
      },
      {
        cidade: 'Lins',
        ufId: 26,
      },
      {
        cidade: 'Livramento',
        ufId: 15,
      },
      {
        cidade: 'Livramento de Nossa Senhora',
        ufId: 5,
      },
      {
        cidade: 'Lizarda',
        ufId: 27,
      },
      {
        cidade: 'Loanda',
        ufId: 18,
      },
      {
        cidade: 'Lobato',
        ufId: 18,
      },
      {
        cidade: 'Logradouro',
        ufId: 15,
      },
      {
        cidade: 'Londrina',
        ufId: 18,
      },
      {
        cidade: 'Lontra',
        ufId: 11,
      },
      {
        cidade: 'Lontras',
        ufId: 24,
      },
      {
        cidade: 'Lorena',
        ufId: 26,
      },
      {
        cidade: 'Loreto',
        ufId: 10,
      },
      {
        cidade: 'Lourdes',
        ufId: 26,
      },
      {
        cidade: 'Louveira',
        ufId: 26,
      },
      {
        cidade: 'Lucas do Rio Verde',
        ufId: 13,
      },
      {
        cidade: 'Lucélia',
        ufId: 26,
      },
      {
        cidade: 'Lucena',
        ufId: 15,
      },
      {
        cidade: 'Lucianópolis',
        ufId: 26,
      },
      {
        cidade: 'Luciara',
        ufId: 13,
      },
      {
        cidade: 'Lucrécia',
        ufId: 20,
      },
      {
        cidade: 'Luís Antônio',
        ufId: 26,
      },
      {
        cidade: 'Luís Correia',
        ufId: 17,
      },
      {
        cidade: 'Luís Domingues',
        ufId: 10,
      },
      {
        cidade: 'Luís Eduardo Magalhães',
        ufId: 5,
      },
      {
        cidade: 'Luís Gomes',
        ufId: 20,
      },
      {
        cidade: 'Luisburgo',
        ufId: 11,
      },
      {
        cidade: 'Luislândia',
        ufId: 11,
      },
      {
        cidade: 'Luiz Alves',
        ufId: 24,
      },
      {
        cidade: 'Luiziana',
        ufId: 18,
      },
      {
        cidade: 'Luiziânia',
        ufId: 26,
      },
      {
        cidade: 'Luminárias',
        ufId: 11,
      },
      {
        cidade: 'Lunardelli',
        ufId: 18,
      },
      {
        cidade: 'Lupércio',
        ufId: 26,
      },
      {
        cidade: 'Lupionópolis',
        ufId: 18,
      },
      {
        cidade: 'Lutécia',
        ufId: 26,
      },
      {
        cidade: 'Luz',
        ufId: 11,
      },
      {
        cidade: 'Luzerna',
        ufId: 24,
      },
      {
        cidade: 'Luziânia',
        ufId: 9,
      },
      {
        cidade: 'Luzilândia',
        ufId: 17,
      },
      {
        cidade: 'Luzinópolis',
        ufId: 27,
      },
      {
        cidade: 'Macaé',
        ufId: 19,
      },
      {
        cidade: 'Macaíba',
        ufId: 20,
      },
      {
        cidade: 'Macajuba',
        ufId: 5,
      },
      {
        cidade: 'Maçambará',
        ufId: 23,
      },
      {
        cidade: 'Macambira',
        ufId: 25,
      },
      {
        cidade: 'Macapá',
        ufId: 4,
      },
      {
        cidade: 'Macaparana',
        ufId: 16,
      },
      {
        cidade: 'Macarani',
        ufId: 5,
      },
      {
        cidade: 'Macatuba',
        ufId: 26,
      },
      {
        cidade: 'Macau',
        ufId: 20,
      },
      {
        cidade: 'Macaubal',
        ufId: 26,
      },
      {
        cidade: 'Macaúbas',
        ufId: 5,
      },
      {
        cidade: 'Macedônia',
        ufId: 26,
      },
      {
        cidade: 'Maceió',
        ufId: 2,
      },
      {
        cidade: 'Machacalis',
        ufId: 11,
      },
      {
        cidade: 'Machadinho',
        ufId: 23,
      },
      {
        cidade: "Machadinho D'Oeste",
        ufId: 21,
      },
      {
        cidade: 'Machado',
        ufId: 11,
      },
      {
        cidade: 'Machados',
        ufId: 16,
      },
      {
        cidade: 'Macieira',
        ufId: 24,
      },
      {
        cidade: 'Macuco',
        ufId: 19,
      },
      {
        cidade: 'Macururé',
        ufId: 5,
      },
      {
        cidade: 'Madalena',
        ufId: 6,
      },
      {
        cidade: 'Madeiro',
        ufId: 17,
      },
      {
        cidade: 'Madre de Deus',
        ufId: 5,
      },
      {
        cidade: 'Madre de Deus de Minas',
        ufId: 11,
      },
      {
        cidade: "Mãe d'Água",
        ufId: 15,
      },
      {
        cidade: 'Mãe do Rio',
        ufId: 14,
      },
      {
        cidade: 'Maetinga',
        ufId: 5,
      },
      {
        cidade: 'Mafra',
        ufId: 24,
      },
      {
        cidade: 'Magalhães Barata',
        ufId: 14,
      },
      {
        cidade: 'Magalhães de Almeida',
        ufId: 10,
      },
      {
        cidade: 'Magda',
        ufId: 26,
      },
      {
        cidade: 'Magé',
        ufId: 19,
      },
      {
        cidade: 'Maiquinique',
        ufId: 5,
      },
      {
        cidade: 'Mairi',
        ufId: 5,
      },
      {
        cidade: 'Mairinque',
        ufId: 26,
      },
      {
        cidade: 'Mairiporã',
        ufId: 26,
      },
      {
        cidade: 'Mairipotaba',
        ufId: 9,
      },
      {
        cidade: 'Major Gercino',
        ufId: 24,
      },
      {
        cidade: 'Major Isidoro',
        ufId: 2,
      },
      {
        cidade: 'Major Sales',
        ufId: 20,
      },
      {
        cidade: 'Major Vieira',
        ufId: 24,
      },
      {
        cidade: 'Malacacheta',
        ufId: 11,
      },
      {
        cidade: 'Malhada',
        ufId: 5,
      },
      {
        cidade: 'Malhada de Pedras',
        ufId: 5,
      },
      {
        cidade: 'Malhada dos Bois',
        ufId: 25,
      },
      {
        cidade: 'Malhador',
        ufId: 25,
      },
      {
        cidade: 'Mallet',
        ufId: 18,
      },
      {
        cidade: 'Malta',
        ufId: 15,
      },
      {
        cidade: 'Mamanguape',
        ufId: 15,
      },
      {
        cidade: 'Mambaí',
        ufId: 9,
      },
      {
        cidade: 'Mamborê',
        ufId: 18,
      },
      {
        cidade: 'Mamonas',
        ufId: 11,
      },
      {
        cidade: 'Mampituba',
        ufId: 23,
      },
      {
        cidade: 'Manacapuru',
        ufId: 3,
      },
      {
        cidade: 'Manaíra',
        ufId: 15,
      },
      {
        cidade: 'Manaquiri',
        ufId: 3,
      },
      {
        cidade: 'Manari',
        ufId: 16,
      },
      {
        cidade: 'Manaus',
        ufId: 3,
      },
      {
        cidade: 'Mâncio Lima',
        ufId: 1,
      },
      {
        cidade: 'Mandaguaçu',
        ufId: 18,
      },
      {
        cidade: 'Mandaguari',
        ufId: 18,
      },
      {
        cidade: 'Mandirituba',
        ufId: 18,
      },
      {
        cidade: 'Manduri',
        ufId: 26,
      },
      {
        cidade: 'Manfrinópolis',
        ufId: 18,
      },
      {
        cidade: 'Manga',
        ufId: 11,
      },
      {
        cidade: 'Mangaratiba',
        ufId: 19,
      },
      {
        cidade: 'Mangueirinha',
        ufId: 18,
      },
      {
        cidade: 'Manhuaçu',
        ufId: 11,
      },
      {
        cidade: 'Manhumirim',
        ufId: 11,
      },
      {
        cidade: 'Manicoré',
        ufId: 3,
      },
      {
        cidade: 'Manoel Emídio',
        ufId: 17,
      },
      {
        cidade: 'Manoel Ribas',
        ufId: 18,
      },
      {
        cidade: 'Manoel Urbano',
        ufId: 1,
      },
      {
        cidade: 'Manoel Viana',
        ufId: 23,
      },
      {
        cidade: 'Manoel Vitorino',
        ufId: 5,
      },
      {
        cidade: 'Mansidão',
        ufId: 5,
      },
      {
        cidade: 'Mantena',
        ufId: 11,
      },
      {
        cidade: 'Mantenópolis',
        ufId: 8,
      },
      {
        cidade: 'Maquiné',
        ufId: 23,
      },
      {
        cidade: 'Mar de Espanha',
        ufId: 11,
      },
      {
        cidade: 'Mar Vermelho',
        ufId: 2,
      },
      {
        cidade: 'Mara Rosa',
        ufId: 9,
      },
      {
        cidade: 'Maraã',
        ufId: 3,
      },
      {
        cidade: 'Marabá',
        ufId: 14,
      },
      {
        cidade: 'Marabá Paulista',
        ufId: 26,
      },
      {
        cidade: 'Maracaçumé',
        ufId: 10,
      },
      {
        cidade: 'Maracaí',
        ufId: 26,
      },
      {
        cidade: 'Maracajá',
        ufId: 24,
      },
      {
        cidade: 'Maracaju',
        ufId: 12,
      },
      {
        cidade: 'Maracanã',
        ufId: 14,
      },
      {
        cidade: 'Maracanaú',
        ufId: 6,
      },
      {
        cidade: 'Maracás',
        ufId: 5,
      },
      {
        cidade: 'Maragogi',
        ufId: 2,
      },
      {
        cidade: 'Maragogipe',
        ufId: 5,
      },
      {
        cidade: 'Maraial',
        ufId: 16,
      },
      {
        cidade: 'Marajá do Sena',
        ufId: 10,
      },
      {
        cidade: 'Maranguape',
        ufId: 6,
      },
      {
        cidade: 'Maranhãozinho',
        ufId: 10,
      },
      {
        cidade: 'Marapanim',
        ufId: 14,
      },
      {
        cidade: 'Marapoama',
        ufId: 26,
      },
      {
        cidade: 'Maratá',
        ufId: 23,
      },
      {
        cidade: 'Marataízes',
        ufId: 8,
      },
      {
        cidade: 'Marau',
        ufId: 23,
      },
      {
        cidade: 'Maraú',
        ufId: 5,
      },
      {
        cidade: 'Maravilha',
        ufId: 2,
      },
      {
        cidade: 'Maravilha',
        ufId: 24,
      },
      {
        cidade: 'Maravilhas',
        ufId: 11,
      },
      {
        cidade: 'Marcação',
        ufId: 15,
      },
      {
        cidade: 'Marcelândia',
        ufId: 13,
      },
      {
        cidade: 'Marcelino Ramos',
        ufId: 23,
      },
      {
        cidade: 'Marcelino Vieira',
        ufId: 20,
      },
      {
        cidade: 'Marcionílio Souza',
        ufId: 5,
      },
      {
        cidade: 'Marco',
        ufId: 6,
      },
      {
        cidade: 'Marcolândia',
        ufId: 17,
      },
      {
        cidade: 'Marcos Parente',
        ufId: 17,
      },
      {
        cidade: 'Marechal Cândido Rondon',
        ufId: 18,
      },
      {
        cidade: 'Marechal Deodoro',
        ufId: 2,
      },
      {
        cidade: 'Marechal Floriano',
        ufId: 8,
      },
      {
        cidade: 'Marechal Thaumaturgo',
        ufId: 1,
      },
      {
        cidade: 'Marema',
        ufId: 24,
      },
      {
        cidade: 'Mari',
        ufId: 15,
      },
      {
        cidade: 'Maria da Fé',
        ufId: 11,
      },
      {
        cidade: 'Maria Helena',
        ufId: 18,
      },
      {
        cidade: 'Marialva',
        ufId: 18,
      },
      {
        cidade: 'Mariana',
        ufId: 11,
      },
      {
        cidade: 'Mariana Pimentel',
        ufId: 23,
      },
      {
        cidade: 'Mariano Moro',
        ufId: 23,
      },
      {
        cidade: 'Marianópolis do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Mariápolis',
        ufId: 26,
      },
      {
        cidade: 'Maribondo',
        ufId: 2,
      },
      {
        cidade: 'Maricá',
        ufId: 19,
      },
      {
        cidade: 'Marilac',
        ufId: 11,
      },
      {
        cidade: 'Marilândia',
        ufId: 8,
      },
      {
        cidade: 'Marilândia do Sul',
        ufId: 18,
      },
      {
        cidade: 'Marilena',
        ufId: 18,
      },
      {
        cidade: 'Marília',
        ufId: 26,
      },
      {
        cidade: 'Mariluz',
        ufId: 18,
      },
      {
        cidade: 'Maringá',
        ufId: 18,
      },
      {
        cidade: 'Marinópolis',
        ufId: 26,
      },
      {
        cidade: 'Mário Campos',
        ufId: 11,
      },
      {
        cidade: 'Mariópolis',
        ufId: 18,
      },
      {
        cidade: 'Maripá',
        ufId: 18,
      },
      {
        cidade: 'Maripá de Minas',
        ufId: 11,
      },
      {
        cidade: 'Marituba',
        ufId: 14,
      },
      {
        cidade: 'Marizópolis',
        ufId: 15,
      },
      {
        cidade: 'Marliéria',
        ufId: 11,
      },
      {
        cidade: 'Marmeleiro',
        ufId: 18,
      },
      {
        cidade: 'Marmelópolis',
        ufId: 11,
      },
      {
        cidade: 'Marques de Souza',
        ufId: 23,
      },
      {
        cidade: 'Marquinho',
        ufId: 18,
      },
      {
        cidade: 'Martinho Campos',
        ufId: 11,
      },
      {
        cidade: 'Martinópole',
        ufId: 6,
      },
      {
        cidade: 'Martinópolis',
        ufId: 26,
      },
      {
        cidade: 'Martins',
        ufId: 20,
      },
      {
        cidade: 'Martins Soares',
        ufId: 11,
      },
      {
        cidade: 'Maruim',
        ufId: 25,
      },
      {
        cidade: 'Marumbi',
        ufId: 18,
      },
      {
        cidade: 'Marzagão',
        ufId: 9,
      },
      {
        cidade: 'Mascote',
        ufId: 5,
      },
      {
        cidade: 'Massapê',
        ufId: 6,
      },
      {
        cidade: 'Massapê do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Massaranduba',
        ufId: 15,
      },
      {
        cidade: 'Massaranduba',
        ufId: 24,
      },
      {
        cidade: 'Mata',
        ufId: 23,
      },
      {
        cidade: 'Mata de São João',
        ufId: 5,
      },
      {
        cidade: 'Mata Grande',
        ufId: 2,
      },
      {
        cidade: 'Mata Roma',
        ufId: 10,
      },
      {
        cidade: 'Mata Verde',
        ufId: 11,
      },
      {
        cidade: 'Matão',
        ufId: 26,
      },
      {
        cidade: 'Mataraca',
        ufId: 15,
      },
      {
        cidade: 'Mateiros',
        ufId: 27,
      },
      {
        cidade: 'Matelândia',
        ufId: 18,
      },
      {
        cidade: 'Materlândia',
        ufId: 11,
      },
      {
        cidade: 'Mateus Leme',
        ufId: 11,
      },
      {
        cidade: 'Mathias Lobato',
        ufId: 11,
      },
      {
        cidade: 'Matias Barbosa',
        ufId: 11,
      },
      {
        cidade: 'Matias Cardoso',
        ufId: 11,
      },
      {
        cidade: 'Matias Olímpio',
        ufId: 17,
      },
      {
        cidade: 'Matina',
        ufId: 5,
      },
      {
        cidade: 'Matinha',
        ufId: 10,
      },
      {
        cidade: 'Matinhas',
        ufId: 15,
      },
      {
        cidade: 'Matinhos',
        ufId: 18,
      },
      {
        cidade: 'Matipó',
        ufId: 11,
      },
      {
        cidade: 'Mato Castelhano',
        ufId: 23,
      },
      {
        cidade: 'Mato Grosso',
        ufId: 15,
      },
      {
        cidade: 'Mato Leitão',
        ufId: 23,
      },
      {
        cidade: 'Mato Queimado',
        ufId: 23,
      },
      {
        cidade: 'Mato Rico',
        ufId: 18,
      },
      {
        cidade: 'Mato Verde',
        ufId: 11,
      },
      {
        cidade: 'Matões',
        ufId: 10,
      },
      {
        cidade: 'Matões do Norte',
        ufId: 10,
      },
      {
        cidade: 'Matos Costa',
        ufId: 24,
      },
      {
        cidade: 'Matozinhos',
        ufId: 11,
      },
      {
        cidade: 'Matrinchã',
        ufId: 9,
      },
      {
        cidade: 'Matriz de Camaragibe',
        ufId: 2,
      },
      {
        cidade: 'Matupá',
        ufId: 13,
      },
      {
        cidade: 'Maturéia',
        ufId: 15,
      },
      {
        cidade: 'Matutina',
        ufId: 11,
      },
      {
        cidade: 'Mauá',
        ufId: 26,
      },
      {
        cidade: 'Mauá da Serra',
        ufId: 18,
      },
      {
        cidade: 'Maués',
        ufId: 3,
      },
      {
        cidade: 'Maurilândia',
        ufId: 9,
      },
      {
        cidade: 'Maurilândia do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Mauriti',
        ufId: 6,
      },
      {
        cidade: 'Maxaranguape',
        ufId: 20,
      },
      {
        cidade: 'Maximiliano de Almeida',
        ufId: 23,
      },
      {
        cidade: 'Mazagão',
        ufId: 4,
      },
      {
        cidade: 'Medeiros',
        ufId: 11,
      },
      {
        cidade: 'Medeiros Neto',
        ufId: 5,
      },
      {
        cidade: 'Medianeira',
        ufId: 18,
      },
      {
        cidade: 'Medicilândia',
        ufId: 14,
      },
      {
        cidade: 'Medina',
        ufId: 11,
      },
      {
        cidade: 'Meleiro',
        ufId: 24,
      },
      {
        cidade: 'Melgaço',
        ufId: 14,
      },
      {
        cidade: 'Mendes',
        ufId: 19,
      },
      {
        cidade: 'Mendes Pimentel',
        ufId: 11,
      },
      {
        cidade: 'Mendonça',
        ufId: 26,
      },
      {
        cidade: 'Mercedes',
        ufId: 18,
      },
      {
        cidade: 'Mercês',
        ufId: 11,
      },
      {
        cidade: 'Meridiano',
        ufId: 26,
      },
      {
        cidade: 'Meruoca',
        ufId: 6,
      },
      {
        cidade: 'Mesópolis',
        ufId: 26,
      },
      {
        cidade: 'Mesquita',
        ufId: 19,
      },
      {
        cidade: 'Mesquita',
        ufId: 11,
      },
      {
        cidade: 'Messias',
        ufId: 2,
      },
      {
        cidade: 'Messias Targino',
        ufId: 20,
      },
      {
        cidade: 'Miguel Alves',
        ufId: 17,
      },
      {
        cidade: 'Miguel Calmon',
        ufId: 5,
      },
      {
        cidade: 'Miguel Leão',
        ufId: 17,
      },
      {
        cidade: 'Miguel Pereira',
        ufId: 19,
      },
      {
        cidade: 'Miguelópolis',
        ufId: 26,
      },
      {
        cidade: 'Milagres',
        ufId: 6,
      },
      {
        cidade: 'Milagres',
        ufId: 5,
      },
      {
        cidade: 'Milagres do Maranhão',
        ufId: 10,
      },
      {
        cidade: 'Milhã',
        ufId: 6,
      },
      {
        cidade: 'Milton Brandão',
        ufId: 17,
      },
      {
        cidade: 'Mimoso de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Mimoso do Sul',
        ufId: 8,
      },
      {
        cidade: 'Minaçu',
        ufId: 9,
      },
      {
        cidade: 'Minador do Negrão',
        ufId: 2,
      },
      {
        cidade: 'Minas do Leão',
        ufId: 23,
      },
      {
        cidade: 'Minas Novas',
        ufId: 11,
      },
      {
        cidade: 'Minduri',
        ufId: 11,
      },
      {
        cidade: 'Mineiros',
        ufId: 9,
      },
      {
        cidade: 'Mineiros do Tietê',
        ufId: 26,
      },
      {
        cidade: 'Ministro Andreazza',
        ufId: 21,
      },
      {
        cidade: 'Mira Estrela',
        ufId: 26,
      },
      {
        cidade: 'Mirabela',
        ufId: 11,
      },
      {
        cidade: 'Miracatu',
        ufId: 26,
      },
      {
        cidade: 'Miracema',
        ufId: 19,
      },
      {
        cidade: 'Miracema do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Mirador',
        ufId: 10,
      },
      {
        cidade: 'Mirador',
        ufId: 18,
      },
      {
        cidade: 'Miradouro',
        ufId: 11,
      },
      {
        cidade: 'Miraguaí',
        ufId: 23,
      },
      {
        cidade: 'Miraí',
        ufId: 11,
      },
      {
        cidade: 'Miraíma',
        ufId: 6,
      },
      {
        cidade: 'Miranda',
        ufId: 12,
      },
      {
        cidade: 'Miranda do Norte',
        ufId: 10,
      },
      {
        cidade: 'Mirandiba',
        ufId: 16,
      },
      {
        cidade: 'Mirandópolis',
        ufId: 26,
      },
      {
        cidade: 'Mirangaba',
        ufId: 5,
      },
      {
        cidade: 'Miranorte',
        ufId: 27,
      },
      {
        cidade: 'Mirante',
        ufId: 5,
      },
      {
        cidade: 'Mirante da Serra',
        ufId: 21,
      },
      {
        cidade: 'Mirante do Paranapanema',
        ufId: 26,
      },
      {
        cidade: 'Miraselva',
        ufId: 18,
      },
      {
        cidade: 'Mirassol',
        ufId: 26,
      },
      {
        cidade: "Mirassol d'Oeste",
        ufId: 13,
      },
      {
        cidade: 'Mirassolândia',
        ufId: 26,
      },
      {
        cidade: 'Miravânia',
        ufId: 11,
      },
      {
        cidade: 'Mirim Doce',
        ufId: 24,
      },
      {
        cidade: 'Mirinzal',
        ufId: 10,
      },
      {
        cidade: 'Missal',
        ufId: 18,
      },
      {
        cidade: 'Missão Velha',
        ufId: 6,
      },
      {
        cidade: 'Mocajuba',
        ufId: 14,
      },
      {
        cidade: 'Mococa',
        ufId: 26,
      },
      {
        cidade: 'Modelo',
        ufId: 24,
      },
      {
        cidade: 'Moeda',
        ufId: 11,
      },
      {
        cidade: 'Moema',
        ufId: 11,
      },
      {
        cidade: 'Mogeiro',
        ufId: 15,
      },
      {
        cidade: 'Mogi das Cruzes',
        ufId: 26,
      },
      {
        cidade: 'Mogi Guaçu',
        ufId: 26,
      },
      {
        cidade: 'Mogi Mirim',
        ufId: 26,
      },
      {
        cidade: 'Moiporá',
        ufId: 9,
      },
      {
        cidade: 'Moita Bonita',
        ufId: 25,
      },
      {
        cidade: 'Moju',
        ufId: 14,
      },
      {
        cidade: 'Mojuí dos Campos',
        ufId: 14,
      },
      {
        cidade: 'Mombaça',
        ufId: 6,
      },
      {
        cidade: 'Mombuca',
        ufId: 26,
      },
      {
        cidade: 'Monção',
        ufId: 10,
      },
      {
        cidade: 'Monções',
        ufId: 26,
      },
      {
        cidade: 'Mondaí',
        ufId: 24,
      },
      {
        cidade: 'Mongaguá',
        ufId: 26,
      },
      {
        cidade: 'Monjolos',
        ufId: 11,
      },
      {
        cidade: 'Monsenhor Gil',
        ufId: 17,
      },
      {
        cidade: 'Monsenhor Hipólito',
        ufId: 17,
      },
      {
        cidade: 'Monsenhor Paulo',
        ufId: 11,
      },
      {
        cidade: 'Monsenhor Tabosa',
        ufId: 6,
      },
      {
        cidade: 'Montadas',
        ufId: 15,
      },
      {
        cidade: 'Montalvânia',
        ufId: 11,
      },
      {
        cidade: 'Montanha',
        ufId: 8,
      },
      {
        cidade: 'Montanhas',
        ufId: 20,
      },
      {
        cidade: 'Montauri',
        ufId: 23,
      },
      {
        cidade: 'Monte Alegre',
        ufId: 14,
      },
      {
        cidade: 'Monte Alegre',
        ufId: 20,
      },
      {
        cidade: 'Monte Alegre de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Monte Alegre de Minas',
        ufId: 11,
      },
      {
        cidade: 'Monte Alegre de Sergipe',
        ufId: 25,
      },
      {
        cidade: 'Monte Alegre do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Monte Alegre do Sul',
        ufId: 26,
      },
      {
        cidade: 'Monte Alegre dos Campos',
        ufId: 23,
      },
      {
        cidade: 'Monte Alto',
        ufId: 26,
      },
      {
        cidade: 'Monte Aprazível',
        ufId: 26,
      },
      {
        cidade: 'Monte Azul',
        ufId: 11,
      },
      {
        cidade: 'Monte Azul Paulista',
        ufId: 26,
      },
      {
        cidade: 'Monte Belo',
        ufId: 11,
      },
      {
        cidade: 'Monte Belo do Sul',
        ufId: 23,
      },
      {
        cidade: 'Monte Carlo',
        ufId: 24,
      },
      {
        cidade: 'Monte Carmelo',
        ufId: 11,
      },
      {
        cidade: 'Monte Castelo',
        ufId: 24,
      },
      {
        cidade: 'Monte Castelo',
        ufId: 26,
      },
      {
        cidade: 'Monte das Gameleiras',
        ufId: 20,
      },
      {
        cidade: 'Monte do Carmo',
        ufId: 27,
      },
      {
        cidade: 'Monte Formoso',
        ufId: 11,
      },
      {
        cidade: 'Monte Horebe',
        ufId: 15,
      },
      {
        cidade: 'Monte Mor',
        ufId: 26,
      },
      {
        cidade: 'Monte Negro',
        ufId: 21,
      },
      {
        cidade: 'Monte Santo',
        ufId: 5,
      },
      {
        cidade: 'Monte Santo de Minas',
        ufId: 11,
      },
      {
        cidade: 'Monte Santo do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Monte Sião',
        ufId: 11,
      },
      {
        cidade: 'Monteiro',
        ufId: 15,
      },
      {
        cidade: 'Monteiro Lobato',
        ufId: 26,
      },
      {
        cidade: 'Monteirópolis',
        ufId: 2,
      },
      {
        cidade: 'Montenegro',
        ufId: 23,
      },
      {
        cidade: 'Montes Altos',
        ufId: 10,
      },
      {
        cidade: 'Montes Claros',
        ufId: 11,
      },
      {
        cidade: 'Montes Claros de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Montezuma',
        ufId: 11,
      },
      {
        cidade: 'Montividiu',
        ufId: 9,
      },
      {
        cidade: 'Montividiu do Norte',
        ufId: 9,
      },
      {
        cidade: 'Morada Nova',
        ufId: 6,
      },
      {
        cidade: 'Morada Nova de Minas',
        ufId: 11,
      },
      {
        cidade: 'Moraújo',
        ufId: 6,
      },
      {
        cidade: 'Moreilândia',
        ufId: 16,
      },
      {
        cidade: 'Moreira Sales',
        ufId: 18,
      },
      {
        cidade: 'Moreno',
        ufId: 16,
      },
      {
        cidade: 'Mormaço',
        ufId: 23,
      },
      {
        cidade: 'Morpará',
        ufId: 5,
      },
      {
        cidade: 'Morretes',
        ufId: 18,
      },
      {
        cidade: 'Morrinhos',
        ufId: 9,
      },
      {
        cidade: 'Morrinhos',
        ufId: 6,
      },
      {
        cidade: 'Morrinhos do Sul',
        ufId: 23,
      },
      {
        cidade: 'Morro Agudo',
        ufId: 26,
      },
      {
        cidade: 'Morro Agudo de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Morro Cabeça no Tempo',
        ufId: 17,
      },
      {
        cidade: 'Morro da Fumaça',
        ufId: 24,
      },
      {
        cidade: 'Morro da Garça',
        ufId: 11,
      },
      {
        cidade: 'Morro do Chapéu',
        ufId: 5,
      },
      {
        cidade: 'Morro do Chapéu do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Morro do Pilar',
        ufId: 11,
      },
      {
        cidade: 'Morro Grande',
        ufId: 24,
      },
      {
        cidade: 'Morro Redondo',
        ufId: 23,
      },
      {
        cidade: 'Morro Reuter',
        ufId: 23,
      },
      {
        cidade: 'Morros',
        ufId: 10,
      },
      {
        cidade: 'Mortugaba',
        ufId: 5,
      },
      {
        cidade: 'Morungaba',
        ufId: 26,
      },
      {
        cidade: 'Mossâmedes',
        ufId: 9,
      },
      {
        cidade: 'Mossoró',
        ufId: 20,
      },
      {
        cidade: 'Mostardas',
        ufId: 23,
      },
      {
        cidade: 'Motuca',
        ufId: 26,
      },
      {
        cidade: 'Mozarlândia',
        ufId: 9,
      },
      {
        cidade: 'Muaná',
        ufId: 14,
      },
      {
        cidade: 'Mucajaí',
        ufId: 22,
      },
      {
        cidade: 'Mucambo',
        ufId: 6,
      },
      {
        cidade: 'Mucugê',
        ufId: 5,
      },
      {
        cidade: 'Muçum',
        ufId: 23,
      },
      {
        cidade: 'Mucuri',
        ufId: 5,
      },
      {
        cidade: 'Mucurici',
        ufId: 8,
      },
      {
        cidade: 'Muitos Capões',
        ufId: 23,
      },
      {
        cidade: 'Muliterno',
        ufId: 23,
      },
      {
        cidade: 'Mulungu',
        ufId: 15,
      },
      {
        cidade: 'Mulungu',
        ufId: 6,
      },
      {
        cidade: 'Mulungu do Morro',
        ufId: 5,
      },
      {
        cidade: 'Mundo Novo',
        ufId: 5,
      },
      {
        cidade: 'Mundo Novo',
        ufId: 12,
      },
      {
        cidade: 'Mundo Novo',
        ufId: 9,
      },
      {
        cidade: 'Munhoz',
        ufId: 11,
      },
      {
        cidade: 'Munhoz de Melo',
        ufId: 18,
      },
      {
        cidade: 'Muniz Ferreira',
        ufId: 5,
      },
      {
        cidade: 'Muniz Freire',
        ufId: 8,
      },
      {
        cidade: 'Muquém de São Francisco',
        ufId: 5,
      },
      {
        cidade: 'Muqui',
        ufId: 8,
      },
      {
        cidade: 'Muriaé',
        ufId: 11,
      },
      {
        cidade: 'Muribeca',
        ufId: 25,
      },
      {
        cidade: 'Murici',
        ufId: 2,
      },
      {
        cidade: 'Murici dos Portelas',
        ufId: 17,
      },
      {
        cidade: 'Muricilândia',
        ufId: 27,
      },
      {
        cidade: 'Muritiba',
        ufId: 5,
      },
      {
        cidade: 'Murutinga do Sul',
        ufId: 26,
      },
      {
        cidade: 'Mutuípe',
        ufId: 5,
      },
      {
        cidade: 'Mutum',
        ufId: 11,
      },
      {
        cidade: 'Mutunópolis',
        ufId: 9,
      },
      {
        cidade: 'Muzambinho',
        ufId: 11,
      },
      {
        cidade: 'Nacip Raydan',
        ufId: 11,
      },
      {
        cidade: 'Nantes',
        ufId: 26,
      },
      {
        cidade: 'Nanuque',
        ufId: 11,
      },
      {
        cidade: 'Não-Me-Toque',
        ufId: 23,
      },
      {
        cidade: 'Naque',
        ufId: 11,
      },
      {
        cidade: 'Narandiba',
        ufId: 26,
      },
      {
        cidade: 'Natal',
        ufId: 20,
      },
      {
        cidade: 'Natalândia',
        ufId: 11,
      },
      {
        cidade: 'Natércia',
        ufId: 11,
      },
      {
        cidade: 'Natividade',
        ufId: 27,
      },
      {
        cidade: 'Natividade',
        ufId: 19,
      },
      {
        cidade: 'Natividade da Serra',
        ufId: 26,
      },
      {
        cidade: 'Natuba',
        ufId: 15,
      },
      {
        cidade: 'Navegantes',
        ufId: 24,
      },
      {
        cidade: 'Naviraí',
        ufId: 12,
      },
      {
        cidade: 'Nazaré',
        ufId: 5,
      },
      {
        cidade: 'Nazaré',
        ufId: 27,
      },
      {
        cidade: 'Nazaré da Mata',
        ufId: 16,
      },
      {
        cidade: 'Nazaré do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Nazaré Paulista',
        ufId: 26,
      },
      {
        cidade: 'Nazareno',
        ufId: 11,
      },
      {
        cidade: 'Nazarezinho',
        ufId: 15,
      },
      {
        cidade: 'Nazária',
        ufId: 17,
      },
      {
        cidade: 'Nazário',
        ufId: 9,
      },
      {
        cidade: 'Neópolis',
        ufId: 25,
      },
      {
        cidade: 'Nepomuceno',
        ufId: 11,
      },
      {
        cidade: 'Nerópolis',
        ufId: 9,
      },
      {
        cidade: 'Neves Paulista',
        ufId: 26,
      },
      {
        cidade: 'Nhamundá',
        ufId: 3,
      },
      {
        cidade: 'Nhandeara',
        ufId: 26,
      },
      {
        cidade: 'Nicolau Vergueiro',
        ufId: 23,
      },
      {
        cidade: 'Nilo Peçanha',
        ufId: 5,
      },
      {
        cidade: 'Nilópolis',
        ufId: 19,
      },
      {
        cidade: 'Nina Rodrigues',
        ufId: 10,
      },
      {
        cidade: 'Ninheira',
        ufId: 11,
      },
      {
        cidade: 'Nioaque',
        ufId: 12,
      },
      {
        cidade: 'Nipoã',
        ufId: 26,
      },
      {
        cidade: 'Niquelândia',
        ufId: 9,
      },
      {
        cidade: 'Nísia Floresta',
        ufId: 20,
      },
      {
        cidade: 'Niterói',
        ufId: 19,
      },
      {
        cidade: 'Nobres',
        ufId: 13,
      },
      {
        cidade: 'Nonoai',
        ufId: 23,
      },
      {
        cidade: 'Nordestina',
        ufId: 5,
      },
      {
        cidade: 'Normandia',
        ufId: 22,
      },
      {
        cidade: 'Nortelândia',
        ufId: 13,
      },
      {
        cidade: 'Nossa Senhora Aparecida',
        ufId: 25,
      },
      {
        cidade: 'Nossa Senhora da Glória',
        ufId: 25,
      },
      {
        cidade: 'Nossa Senhora das Dores',
        ufId: 25,
      },
      {
        cidade: 'Nossa Senhora das Graças',
        ufId: 18,
      },
      {
        cidade: 'Nossa Senhora de Lourdes',
        ufId: 25,
      },
      {
        cidade: 'Nossa Senhora de Nazaré',
        ufId: 17,
      },
      {
        cidade: 'Nossa Senhora do Livramento',
        ufId: 13,
      },
      {
        cidade: 'Nossa Senhora do Socorro',
        ufId: 25,
      },
      {
        cidade: 'Nossa Senhora dos Remédios',
        ufId: 17,
      },
      {
        cidade: 'Nova Aliança',
        ufId: 26,
      },
      {
        cidade: 'Nova Aliança do Ivaí',
        ufId: 18,
      },
      {
        cidade: 'Nova Alvorada',
        ufId: 23,
      },
      {
        cidade: 'Nova Alvorada do Sul',
        ufId: 12,
      },
      {
        cidade: 'Nova América',
        ufId: 9,
      },
      {
        cidade: 'Nova América da Colina',
        ufId: 18,
      },
      {
        cidade: 'Nova Andradina',
        ufId: 12,
      },
      {
        cidade: 'Nova Araçá',
        ufId: 23,
      },
      {
        cidade: 'Nova Aurora',
        ufId: 18,
      },
      {
        cidade: 'Nova Aurora',
        ufId: 9,
      },
      {
        cidade: 'Nova Bandeirantes',
        ufId: 13,
      },
      {
        cidade: 'Nova Bassano',
        ufId: 23,
      },
      {
        cidade: 'Nova Belém',
        ufId: 11,
      },
      {
        cidade: 'Nova Boa Vista',
        ufId: 23,
      },
      {
        cidade: 'Nova Brasilândia',
        ufId: 13,
      },
      {
        cidade: "Nova Brasilândia D'Oeste",
        ufId: 21,
      },
      {
        cidade: 'Nova Bréscia',
        ufId: 23,
      },
      {
        cidade: 'Nova Campina',
        ufId: 26,
      },
      {
        cidade: 'Nova Canaã',
        ufId: 5,
      },
      {
        cidade: 'Nova Canaã do Norte',
        ufId: 13,
      },
      {
        cidade: 'Nova Canaã Paulista',
        ufId: 26,
      },
      {
        cidade: 'Nova Candelária',
        ufId: 23,
      },
      {
        cidade: 'Nova Cantu',
        ufId: 18,
      },
      {
        cidade: 'Nova Castilho',
        ufId: 26,
      },
      {
        cidade: 'Nova Colinas',
        ufId: 10,
      },
      {
        cidade: 'Nova Crixás',
        ufId: 9,
      },
      {
        cidade: 'Nova Cruz',
        ufId: 20,
      },
      {
        cidade: 'Nova Era',
        ufId: 11,
      },
      {
        cidade: 'Nova Erechim',
        ufId: 24,
      },
      {
        cidade: 'Nova Esperança',
        ufId: 18,
      },
      {
        cidade: 'Nova Esperança do Piriá',
        ufId: 14,
      },
      {
        cidade: 'Nova Esperança do Sudoeste',
        ufId: 18,
      },
      {
        cidade: 'Nova Esperança do Sul',
        ufId: 23,
      },
      {
        cidade: 'Nova Europa',
        ufId: 26,
      },
      {
        cidade: 'Nova Fátima',
        ufId: 18,
      },
      {
        cidade: 'Nova Fátima',
        ufId: 5,
      },
      {
        cidade: 'Nova Floresta',
        ufId: 15,
      },
      {
        cidade: 'Nova Friburgo',
        ufId: 19,
      },
      {
        cidade: 'Nova Glória',
        ufId: 9,
      },
      {
        cidade: 'Nova Granada',
        ufId: 26,
      },
      {
        cidade: 'Nova Guarita',
        ufId: 13,
      },
      {
        cidade: 'Nova Guataporanga',
        ufId: 26,
      },
      {
        cidade: 'Nova Hartz',
        ufId: 23,
      },
      {
        cidade: 'Nova Ibiá',
        ufId: 5,
      },
      {
        cidade: 'Nova Iguaçu',
        ufId: 19,
      },
      {
        cidade: 'Nova Iguaçu de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Nova Independência',
        ufId: 26,
      },
      {
        cidade: 'Nova Iorque',
        ufId: 10,
      },
      {
        cidade: 'Nova Ipixuna',
        ufId: 14,
      },
      {
        cidade: 'Nova Itaberaba',
        ufId: 24,
      },
      {
        cidade: 'Nova Itarana',
        ufId: 5,
      },
      {
        cidade: 'Nova Lacerda',
        ufId: 13,
      },
      {
        cidade: 'Nova Laranjeiras',
        ufId: 18,
      },
      {
        cidade: 'Nova Lima',
        ufId: 11,
      },
      {
        cidade: 'Nova Londrina',
        ufId: 18,
      },
      {
        cidade: 'Nova Luzitânia',
        ufId: 26,
      },
      {
        cidade: 'Nova Mamoré',
        ufId: 21,
      },
      {
        cidade: 'Nova Marilândia',
        ufId: 13,
      },
      {
        cidade: 'Nova Maringá',
        ufId: 13,
      },
      {
        cidade: 'Nova Módica',
        ufId: 11,
      },
      {
        cidade: 'Nova Monte Verde',
        ufId: 13,
      },
      {
        cidade: 'Nova Mutum',
        ufId: 13,
      },
      {
        cidade: 'Nova Nazaré',
        ufId: 13,
      },
      {
        cidade: 'Nova Odessa',
        ufId: 26,
      },
      {
        cidade: 'Nova Olímpia',
        ufId: 18,
      },
      {
        cidade: 'Nova Olímpia',
        ufId: 13,
      },
      {
        cidade: 'Nova Olinda',
        ufId: 27,
      },
      {
        cidade: 'Nova Olinda',
        ufId: 6,
      },
      {
        cidade: 'Nova Olinda',
        ufId: 15,
      },
      {
        cidade: 'Nova Olinda do Maranhão',
        ufId: 10,
      },
      {
        cidade: 'Nova Olinda do Norte',
        ufId: 3,
      },
      {
        cidade: 'Nova Pádua',
        ufId: 23,
      },
      {
        cidade: 'Nova Palma',
        ufId: 23,
      },
      {
        cidade: 'Nova Palmeira',
        ufId: 15,
      },
      {
        cidade: 'Nova Petrópolis',
        ufId: 23,
      },
      {
        cidade: 'Nova Ponte',
        ufId: 11,
      },
      {
        cidade: 'Nova Porteirinha',
        ufId: 11,
      },
      {
        cidade: 'Nova Prata',
        ufId: 23,
      },
      {
        cidade: 'Nova Prata do Iguaçu',
        ufId: 18,
      },
      {
        cidade: 'Nova Ramada',
        ufId: 23,
      },
      {
        cidade: 'Nova Redenção',
        ufId: 5,
      },
      {
        cidade: 'Nova Resende',
        ufId: 11,
      },
      {
        cidade: 'Nova Roma',
        ufId: 9,
      },
      {
        cidade: 'Nova Roma do Sul',
        ufId: 23,
      },
      {
        cidade: 'Nova Rosalândia',
        ufId: 27,
      },
      {
        cidade: 'Nova Russas',
        ufId: 6,
      },
      {
        cidade: 'Nova Santa Bárbara',
        ufId: 18,
      },
      {
        cidade: 'Nova Santa Helena',
        ufId: 13,
      },
      {
        cidade: 'Nova Santa Rita',
        ufId: 23,
      },
      {
        cidade: 'Nova Santa Rita',
        ufId: 17,
      },
      {
        cidade: 'Nova Santa Rosa',
        ufId: 18,
      },
      {
        cidade: 'Nova Serrana',
        ufId: 11,
      },
      {
        cidade: 'Nova Soure',
        ufId: 5,
      },
      {
        cidade: 'Nova Tebas',
        ufId: 18,
      },
      {
        cidade: 'Nova Timboteua',
        ufId: 14,
      },
      {
        cidade: 'Nova Trento',
        ufId: 24,
      },
      {
        cidade: 'Nova Ubiratã',
        ufId: 13,
      },
      {
        cidade: 'Nova União',
        ufId: 11,
      },
      {
        cidade: 'Nova União',
        ufId: 21,
      },
      {
        cidade: 'Nova Venécia',
        ufId: 8,
      },
      {
        cidade: 'Nova Veneza',
        ufId: 24,
      },
      {
        cidade: 'Nova Veneza',
        ufId: 9,
      },
      {
        cidade: 'Nova Viçosa',
        ufId: 5,
      },
      {
        cidade: 'Nova Xavantina',
        ufId: 13,
      },
      {
        cidade: 'Novais',
        ufId: 26,
      },
      {
        cidade: 'Novo Acordo',
        ufId: 27,
      },
      {
        cidade: 'Novo Airão',
        ufId: 3,
      },
      {
        cidade: 'Novo Alegre',
        ufId: 27,
      },
      {
        cidade: 'Novo Aripuanã',
        ufId: 3,
      },
      {
        cidade: 'Novo Barreiro',
        ufId: 23,
      },
      {
        cidade: 'Novo Brasil',
        ufId: 9,
      },
      {
        cidade: 'Novo Cabrais',
        ufId: 23,
      },
      {
        cidade: 'Novo Cruzeiro',
        ufId: 11,
      },
      {
        cidade: 'Novo Gama',
        ufId: 9,
      },
      {
        cidade: 'Novo Hamburgo',
        ufId: 23,
      },
      {
        cidade: 'Novo Horizonte',
        ufId: 24,
      },
      {
        cidade: 'Novo Horizonte',
        ufId: 26,
      },
      {
        cidade: 'Novo Horizonte',
        ufId: 5,
      },
      {
        cidade: 'Novo Horizonte do Norte',
        ufId: 13,
      },
      {
        cidade: 'Novo Horizonte do Oeste',
        ufId: 21,
      },
      {
        cidade: 'Novo Horizonte do Sul',
        ufId: 12,
      },
      {
        cidade: 'Novo Itacolomi',
        ufId: 18,
      },
      {
        cidade: 'Novo Jardim',
        ufId: 27,
      },
      {
        cidade: 'Novo Lino',
        ufId: 2,
      },
      {
        cidade: 'Novo Machado',
        ufId: 23,
      },
      {
        cidade: 'Novo Mundo',
        ufId: 13,
      },
      {
        cidade: 'Novo Oriente',
        ufId: 6,
      },
      {
        cidade: 'Novo Oriente de Minas',
        ufId: 11,
      },
      {
        cidade: 'Novo Oriente do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Novo Planalto',
        ufId: 9,
      },
      {
        cidade: 'Novo Progresso',
        ufId: 14,
      },
      {
        cidade: 'Novo Repartimento',
        ufId: 14,
      },
      {
        cidade: 'Novo Santo Antônio',
        ufId: 17,
      },
      {
        cidade: 'Novo Santo Antônio',
        ufId: 13,
      },
      {
        cidade: 'Novo São Joaquim',
        ufId: 13,
      },
      {
        cidade: 'Novo Tiradentes',
        ufId: 23,
      },
      {
        cidade: 'Novo Triunfo',
        ufId: 5,
      },
      {
        cidade: 'Novo Xingu',
        ufId: 23,
      },
      {
        cidade: 'Novorizonte',
        ufId: 11,
      },
      {
        cidade: 'Nuporanga',
        ufId: 26,
      },
      {
        cidade: 'Óbidos',
        ufId: 14,
      },
      {
        cidade: 'Ocara',
        ufId: 6,
      },
      {
        cidade: 'Ocauçu',
        ufId: 26,
      },
      {
        cidade: 'Oeiras',
        ufId: 17,
      },
      {
        cidade: 'Oeiras do Pará',
        ufId: 14,
      },
      {
        cidade: 'Oiapoque',
        ufId: 4,
      },
      {
        cidade: 'Olaria',
        ufId: 11,
      },
      {
        cidade: 'Óleo',
        ufId: 26,
      },
      {
        cidade: "Olho d'Água",
        ufId: 15,
      },
      {
        cidade: "Olho d'Água das Cunhãs",
        ufId: 10,
      },
      {
        cidade: "Olho d'Água das Flores",
        ufId: 2,
      },
      {
        cidade: "Olho d'Água do Casado",
        ufId: 2,
      },
      {
        cidade: "Olho D'Água do Piauí",
        ufId: 17,
      },
      {
        cidade: "Olho d'Água Grande",
        ufId: 2,
      },
      {
        cidade: "Olho-d'Água do Borges",
        ufId: 20,
      },
      {
        cidade: "Olhos d'Água",
        ufId: 11,
      },
      {
        cidade: 'Olímpia',
        ufId: 26,
      },
      {
        cidade: 'Olímpio Noronha',
        ufId: 11,
      },
      {
        cidade: 'Olinda',
        ufId: 16,
      },
      {
        cidade: 'Olinda Nova do Maranhão',
        ufId: 10,
      },
      {
        cidade: 'Olindina',
        ufId: 5,
      },
      {
        cidade: 'Olivedos',
        ufId: 15,
      },
      {
        cidade: 'Oliveira',
        ufId: 11,
      },
      {
        cidade: 'Oliveira de Fátima',
        ufId: 27,
      },
      {
        cidade: 'Oliveira dos Brejinhos',
        ufId: 5,
      },
      {
        cidade: 'Oliveira Fortes',
        ufId: 11,
      },
      {
        cidade: 'Olivença',
        ufId: 2,
      },
      {
        cidade: 'Onça de Pitangui',
        ufId: 11,
      },
      {
        cidade: 'Onda Verde',
        ufId: 26,
      },
      {
        cidade: 'Oratórios',
        ufId: 11,
      },
      {
        cidade: 'Oriente',
        ufId: 26,
      },
      {
        cidade: 'Orindiúva',
        ufId: 26,
      },
      {
        cidade: 'Oriximiná',
        ufId: 14,
      },
      {
        cidade: 'Orizânia',
        ufId: 11,
      },
      {
        cidade: 'Orizona',
        ufId: 9,
      },
      {
        cidade: 'Orlândia',
        ufId: 26,
      },
      {
        cidade: 'Orleans',
        ufId: 24,
      },
      {
        cidade: 'Orobó',
        ufId: 16,
      },
      {
        cidade: 'Orocó',
        ufId: 16,
      },
      {
        cidade: 'Orós',
        ufId: 6,
      },
      {
        cidade: 'Ortigueira',
        ufId: 18,
      },
      {
        cidade: 'Osasco',
        ufId: 26,
      },
      {
        cidade: 'Oscar Bressane',
        ufId: 26,
      },
      {
        cidade: 'Osório',
        ufId: 23,
      },
      {
        cidade: 'Osvaldo Cruz',
        ufId: 26,
      },
      {
        cidade: 'Otacílio Costa',
        ufId: 24,
      },
      {
        cidade: 'Ourém',
        ufId: 14,
      },
      {
        cidade: 'Ouriçangas',
        ufId: 5,
      },
      {
        cidade: 'Ouricuri',
        ufId: 16,
      },
      {
        cidade: 'Ourilândia do Norte',
        ufId: 14,
      },
      {
        cidade: 'Ourinhos',
        ufId: 26,
      },
      {
        cidade: 'Ourizona',
        ufId: 18,
      },
      {
        cidade: 'Ouro',
        ufId: 24,
      },
      {
        cidade: 'Ouro Branco',
        ufId: 11,
      },
      {
        cidade: 'Ouro Branco',
        ufId: 20,
      },
      {
        cidade: 'Ouro Branco',
        ufId: 2,
      },
      {
        cidade: 'Ouro Fino',
        ufId: 11,
      },
      {
        cidade: 'Ouro Preto',
        ufId: 11,
      },
      {
        cidade: 'Ouro Preto do Oeste',
        ufId: 21,
      },
      {
        cidade: 'Ouro Velho',
        ufId: 15,
      },
      {
        cidade: 'Ouro Verde',
        ufId: 24,
      },
      {
        cidade: 'Ouro Verde',
        ufId: 26,
      },
      {
        cidade: 'Ouro Verde de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Ouro Verde de Minas',
        ufId: 11,
      },
      {
        cidade: 'Ouro Verde do Oeste',
        ufId: 18,
      },
      {
        cidade: 'Ouroeste',
        ufId: 26,
      },
      {
        cidade: 'Ourolândia',
        ufId: 5,
      },
      {
        cidade: 'Ouvidor',
        ufId: 9,
      },
      {
        cidade: 'Pacaembu',
        ufId: 26,
      },
      {
        cidade: 'Pacajá',
        ufId: 14,
      },
      {
        cidade: 'Pacajus',
        ufId: 6,
      },
      {
        cidade: 'Pacaraima',
        ufId: 22,
      },
      {
        cidade: 'Pacatuba',
        ufId: 6,
      },
      {
        cidade: 'Pacatuba',
        ufId: 25,
      },
      {
        cidade: 'Paço do Lumiar',
        ufId: 10,
      },
      {
        cidade: 'Pacoti',
        ufId: 6,
      },
      {
        cidade: 'Pacujá',
        ufId: 6,
      },
      {
        cidade: 'Padre Bernardo',
        ufId: 9,
      },
      {
        cidade: 'Padre Carvalho',
        ufId: 11,
      },
      {
        cidade: 'Padre Marcos',
        ufId: 17,
      },
      {
        cidade: 'Padre Paraíso',
        ufId: 11,
      },
      {
        cidade: 'Paes Landim',
        ufId: 17,
      },
      {
        cidade: 'Pai Pedro',
        ufId: 11,
      },
      {
        cidade: 'Paial',
        ufId: 24,
      },
      {
        cidade: 'Paiçandu',
        ufId: 18,
      },
      {
        cidade: 'Paim Filho',
        ufId: 23,
      },
      {
        cidade: 'Paineiras',
        ufId: 11,
      },
      {
        cidade: 'Painel',
        ufId: 24,
      },
      {
        cidade: 'Pains',
        ufId: 11,
      },
      {
        cidade: 'Paiva',
        ufId: 11,
      },
      {
        cidade: 'Pajeú do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Palestina',
        ufId: 2,
      },
      {
        cidade: 'Palestina',
        ufId: 26,
      },
      {
        cidade: 'Palestina de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Palestina do Pará',
        ufId: 14,
      },
      {
        cidade: 'Palhano',
        ufId: 6,
      },
      {
        cidade: 'Palhoça',
        ufId: 24,
      },
      {
        cidade: 'Palma',
        ufId: 11,
      },
      {
        cidade: 'Palma Sola',
        ufId: 24,
      },
      {
        cidade: 'Palmácia',
        ufId: 6,
      },
      {
        cidade: 'Palmares',
        ufId: 16,
      },
      {
        cidade: 'Palmares do Sul',
        ufId: 23,
      },
      {
        cidade: 'Palmares Paulista',
        ufId: 26,
      },
      {
        cidade: 'Palmas',
        ufId: 18,
      },
      {
        cidade: 'Palmas',
        ufId: 27,
      },
      {
        cidade: 'Palmas de Monte Alto',
        ufId: 5,
      },
      {
        cidade: 'Palmeira',
        ufId: 18,
      },
      {
        cidade: 'Palmeira',
        ufId: 24,
      },
      {
        cidade: "Palmeira d'Oeste",
        ufId: 26,
      },
      {
        cidade: 'Palmeira das Missões',
        ufId: 23,
      },
      {
        cidade: 'Palmeira do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Palmeira dos Índios',
        ufId: 2,
      },
      {
        cidade: 'Palmeirais',
        ufId: 17,
      },
      {
        cidade: 'Palmeirândia',
        ufId: 10,
      },
      {
        cidade: 'Palmeirante',
        ufId: 27,
      },
      {
        cidade: 'Palmeiras',
        ufId: 5,
      },
      {
        cidade: 'Palmeiras de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Palmeiras do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Palmeirina',
        ufId: 16,
      },
      {
        cidade: 'Palmeirópolis',
        ufId: 27,
      },
      {
        cidade: 'Palmelo',
        ufId: 9,
      },
      {
        cidade: 'Palminópolis',
        ufId: 9,
      },
      {
        cidade: 'Palmital',
        ufId: 26,
      },
      {
        cidade: 'Palmital',
        ufId: 18,
      },
      {
        cidade: 'Palmitinho',
        ufId: 23,
      },
      {
        cidade: 'Palmitos',
        ufId: 24,
      },
      {
        cidade: 'Palmópolis',
        ufId: 11,
      },
      {
        cidade: 'Palotina',
        ufId: 18,
      },
      {
        cidade: 'Panamá',
        ufId: 9,
      },
      {
        cidade: 'Panambi',
        ufId: 23,
      },
      {
        cidade: 'Pancas',
        ufId: 8,
      },
      {
        cidade: 'Panelas',
        ufId: 16,
      },
      {
        cidade: 'Panorama',
        ufId: 26,
      },
      {
        cidade: 'Pantano Grande',
        ufId: 23,
      },
      {
        cidade: 'Pão de Açúcar',
        ufId: 2,
      },
      {
        cidade: 'Papagaios',
        ufId: 11,
      },
      {
        cidade: 'Papanduva',
        ufId: 24,
      },
      {
        cidade: 'Paquetá',
        ufId: 17,
      },
      {
        cidade: 'Pará de Minas',
        ufId: 11,
      },
      {
        cidade: 'Paracambi',
        ufId: 19,
      },
      {
        cidade: 'Paracatu',
        ufId: 11,
      },
      {
        cidade: 'Paracuru',
        ufId: 6,
      },
      {
        cidade: 'Paragominas',
        ufId: 14,
      },
      {
        cidade: 'Paraguaçu',
        ufId: 11,
      },
      {
        cidade: 'Paraguaçu Paulista',
        ufId: 26,
      },
      {
        cidade: 'Paraí',
        ufId: 23,
      },
      {
        cidade: 'Paraíba do Sul',
        ufId: 19,
      },
      {
        cidade: 'Paraibano',
        ufId: 10,
      },
      {
        cidade: 'Paraibuna',
        ufId: 26,
      },
      {
        cidade: 'Paraipaba',
        ufId: 6,
      },
      {
        cidade: 'Paraíso',
        ufId: 26,
      },
      {
        cidade: 'Paraíso',
        ufId: 24,
      },
      {
        cidade: 'Paraíso das Águas',
        ufId: 12,
      },
      {
        cidade: 'Paraíso do Norte',
        ufId: 18,
      },
      {
        cidade: 'Paraíso do Sul',
        ufId: 23,
      },
      {
        cidade: 'Paraíso do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Paraisópolis',
        ufId: 11,
      },
      {
        cidade: 'Parambu',
        ufId: 6,
      },
      {
        cidade: 'Paramirim',
        ufId: 5,
      },
      {
        cidade: 'Paramoti',
        ufId: 6,
      },
      {
        cidade: 'Paranã',
        ufId: 27,
      },
      {
        cidade: 'Paraná',
        ufId: 20,
      },
      {
        cidade: 'Paranacity',
        ufId: 18,
      },
      {
        cidade: 'Paranaguá',
        ufId: 18,
      },
      {
        cidade: 'Paranaíba',
        ufId: 12,
      },
      {
        cidade: 'Paranaiguara',
        ufId: 9,
      },
      {
        cidade: 'Paranaíta',
        ufId: 13,
      },
      {
        cidade: 'Paranapanema',
        ufId: 26,
      },
      {
        cidade: 'Paranapoema',
        ufId: 18,
      },
      {
        cidade: 'Paranapuã',
        ufId: 26,
      },
      {
        cidade: 'Paranatama',
        ufId: 16,
      },
      {
        cidade: 'Paranatinga',
        ufId: 13,
      },
      {
        cidade: 'Paranavaí',
        ufId: 18,
      },
      {
        cidade: 'Paranhos',
        ufId: 12,
      },
      {
        cidade: 'Paraopeba',
        ufId: 11,
      },
      {
        cidade: 'Parapuã',
        ufId: 26,
      },
      {
        cidade: 'Parari',
        ufId: 15,
      },
      {
        cidade: 'Paratinga',
        ufId: 5,
      },
      {
        cidade: 'Paraty',
        ufId: 19,
      },
      {
        cidade: 'Paraú',
        ufId: 20,
      },
      {
        cidade: 'Parauapebas',
        ufId: 14,
      },
      {
        cidade: 'Paraúna',
        ufId: 9,
      },
      {
        cidade: 'Parazinho',
        ufId: 20,
      },
      {
        cidade: 'Pardinho',
        ufId: 26,
      },
      {
        cidade: 'Pareci Novo',
        ufId: 23,
      },
      {
        cidade: 'Parecis',
        ufId: 21,
      },
      {
        cidade: 'Parelhas',
        ufId: 20,
      },
      {
        cidade: 'Pariconha',
        ufId: 2,
      },
      {
        cidade: 'Parintins',
        ufId: 3,
      },
      {
        cidade: 'Paripiranga',
        ufId: 5,
      },
      {
        cidade: 'Paripueira',
        ufId: 2,
      },
      {
        cidade: 'Pariquera-Açu',
        ufId: 26,
      },
      {
        cidade: 'Parisi',
        ufId: 26,
      },
      {
        cidade: 'Parnaguá',
        ufId: 17,
      },
      {
        cidade: 'Parnaíba',
        ufId: 17,
      },
      {
        cidade: 'Parnamirim',
        ufId: 20,
      },
      {
        cidade: 'Parnamirim',
        ufId: 16,
      },
      {
        cidade: 'Parnarama',
        ufId: 10,
      },
      {
        cidade: 'Parobé',
        ufId: 23,
      },
      {
        cidade: 'Passa e Fica',
        ufId: 20,
      },
      {
        cidade: 'Passa Quatro',
        ufId: 11,
      },
      {
        cidade: 'Passa Sete',
        ufId: 23,
      },
      {
        cidade: 'Passa Tempo',
        ufId: 11,
      },
      {
        cidade: 'Passa-Vinte',
        ufId: 11,
      },
      {
        cidade: 'Passabém',
        ufId: 11,
      },
      {
        cidade: 'Passagem',
        ufId: 20,
      },
      {
        cidade: 'Passagem',
        ufId: 15,
      },
      {
        cidade: 'Passagem Franca',
        ufId: 10,
      },
      {
        cidade: 'Passagem Franca do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Passira',
        ufId: 16,
      },
      {
        cidade: 'Passo de Camaragibe',
        ufId: 2,
      },
      {
        cidade: 'Passo de Torres',
        ufId: 24,
      },
      {
        cidade: 'Passo do Sobrado',
        ufId: 23,
      },
      {
        cidade: 'Passo Fundo',
        ufId: 23,
      },
      {
        cidade: 'Passos',
        ufId: 11,
      },
      {
        cidade: 'Passos Maia',
        ufId: 24,
      },
      {
        cidade: 'Pastos Bons',
        ufId: 10,
      },
      {
        cidade: 'Patis',
        ufId: 11,
      },
      {
        cidade: 'Pato Bragado',
        ufId: 18,
      },
      {
        cidade: 'Pato Branco',
        ufId: 18,
      },
      {
        cidade: 'Patos',
        ufId: 15,
      },
      {
        cidade: 'Patos de Minas',
        ufId: 11,
      },
      {
        cidade: 'Patos do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Patrocínio',
        ufId: 11,
      },
      {
        cidade: 'Patrocínio do Muriaé',
        ufId: 11,
      },
      {
        cidade: 'Patrocínio Paulista',
        ufId: 26,
      },
      {
        cidade: 'Patu',
        ufId: 20,
      },
      {
        cidade: 'Paty do Alferes',
        ufId: 19,
      },
      {
        cidade: 'Pau Brasil',
        ufId: 5,
      },
      {
        cidade: "Pau d'Arco",
        ufId: 14,
      },
      {
        cidade: "Pau D'Arco",
        ufId: 27,
      },
      {
        cidade: "Pau D'Arco do Piauí",
        ufId: 17,
      },
      {
        cidade: 'Pau dos Ferros',
        ufId: 20,
      },
      {
        cidade: 'Paudalho',
        ufId: 16,
      },
      {
        cidade: 'Pauini',
        ufId: 3,
      },
      {
        cidade: 'Paula Cândido',
        ufId: 11,
      },
      {
        cidade: 'Paula Freitas',
        ufId: 18,
      },
      {
        cidade: 'Paulicéia',
        ufId: 26,
      },
      {
        cidade: 'Paulínia',
        ufId: 26,
      },
      {
        cidade: 'Paulino Neves',
        ufId: 10,
      },
      {
        cidade: 'Paulista',
        ufId: 15,
      },
      {
        cidade: 'Paulista',
        ufId: 16,
      },
      {
        cidade: 'Paulistana',
        ufId: 17,
      },
      {
        cidade: 'Paulistânia',
        ufId: 26,
      },
      {
        cidade: 'Paulistas',
        ufId: 11,
      },
      {
        cidade: 'Paulo Afonso',
        ufId: 5,
      },
      {
        cidade: 'Paulo Bento',
        ufId: 23,
      },
      {
        cidade: 'Paulo de Faria',
        ufId: 26,
      },
      {
        cidade: 'Paulo Frontin',
        ufId: 18,
      },
      {
        cidade: 'Paulo Jacinto',
        ufId: 2,
      },
      {
        cidade: 'Paulo Lopes',
        ufId: 24,
      },
      {
        cidade: 'Paulo Ramos',
        ufId: 10,
      },
      {
        cidade: 'Pavão',
        ufId: 11,
      },
      {
        cidade: 'Paverama',
        ufId: 23,
      },
      {
        cidade: 'Pavussu',
        ufId: 17,
      },
      {
        cidade: 'Pé de Serra',
        ufId: 5,
      },
      {
        cidade: 'Peabiru',
        ufId: 18,
      },
      {
        cidade: 'Peçanha',
        ufId: 11,
      },
      {
        cidade: 'Pederneiras',
        ufId: 26,
      },
      {
        cidade: 'Pedra',
        ufId: 16,
      },
      {
        cidade: 'Pedra Azul',
        ufId: 11,
      },
      {
        cidade: 'Pedra Bela',
        ufId: 26,
      },
      {
        cidade: 'Pedra Bonita',
        ufId: 11,
      },
      {
        cidade: 'Pedra Branca',
        ufId: 15,
      },
      {
        cidade: 'Pedra Branca',
        ufId: 6,
      },
      {
        cidade: 'Pedra Branca do Amapari',
        ufId: 4,
      },
      {
        cidade: 'Pedra do Anta',
        ufId: 11,
      },
      {
        cidade: 'Pedra do Indaiá',
        ufId: 11,
      },
      {
        cidade: 'Pedra Dourada',
        ufId: 11,
      },
      {
        cidade: 'Pedra Grande',
        ufId: 20,
      },
      {
        cidade: 'Pedra Lavrada',
        ufId: 15,
      },
      {
        cidade: 'Pedra Mole',
        ufId: 25,
      },
      {
        cidade: 'Pedra Preta',
        ufId: 20,
      },
      {
        cidade: 'Pedra Preta',
        ufId: 13,
      },
      {
        cidade: 'Pedralva',
        ufId: 11,
      },
      {
        cidade: 'Pedranópolis',
        ufId: 26,
      },
      {
        cidade: 'Pedrão',
        ufId: 5,
      },
      {
        cidade: 'Pedras Altas',
        ufId: 23,
      },
      {
        cidade: 'Pedras de Fogo',
        ufId: 15,
      },
      {
        cidade: 'Pedras de Maria da Cruz',
        ufId: 11,
      },
      {
        cidade: 'Pedras Grandes',
        ufId: 24,
      },
      {
        cidade: 'Pedregulho',
        ufId: 26,
      },
      {
        cidade: 'Pedreira',
        ufId: 26,
      },
      {
        cidade: 'Pedreiras',
        ufId: 10,
      },
      {
        cidade: 'Pedrinhas',
        ufId: 25,
      },
      {
        cidade: 'Pedrinhas Paulista',
        ufId: 26,
      },
      {
        cidade: 'Pedrinópolis',
        ufId: 11,
      },
      {
        cidade: 'Pedro Afonso',
        ufId: 27,
      },
      {
        cidade: 'Pedro Alexandre',
        ufId: 5,
      },
      {
        cidade: 'Pedro Avelino',
        ufId: 20,
      },
      {
        cidade: 'Pedro Canário',
        ufId: 8,
      },
      {
        cidade: 'Pedro de Toledo',
        ufId: 26,
      },
      {
        cidade: 'Pedro do Rosário',
        ufId: 10,
      },
      {
        cidade: 'Pedro Gomes',
        ufId: 12,
      },
      {
        cidade: 'Pedro II',
        ufId: 17,
      },
      {
        cidade: 'Pedro Laurentino',
        ufId: 17,
      },
      {
        cidade: 'Pedro Leopoldo',
        ufId: 11,
      },
      {
        cidade: 'Pedro Osório',
        ufId: 23,
      },
      {
        cidade: 'Pedro Régis',
        ufId: 15,
      },
      {
        cidade: 'Pedro Teixeira',
        ufId: 11,
      },
      {
        cidade: 'Pedro Velho',
        ufId: 20,
      },
      {
        cidade: 'Peixe',
        ufId: 27,
      },
      {
        cidade: 'Peixe-Boi',
        ufId: 14,
      },
      {
        cidade: 'Peixoto de Azevedo',
        ufId: 13,
      },
      {
        cidade: 'Pejuçara',
        ufId: 23,
      },
      {
        cidade: 'Pelotas',
        ufId: 23,
      },
      {
        cidade: 'Penaforte',
        ufId: 6,
      },
      {
        cidade: 'Penalva',
        ufId: 10,
      },
      {
        cidade: 'Penápolis',
        ufId: 26,
      },
      {
        cidade: 'Pendências',
        ufId: 20,
      },
      {
        cidade: 'Penedo',
        ufId: 2,
      },
      {
        cidade: 'Penha',
        ufId: 24,
      },
      {
        cidade: 'Pentecoste',
        ufId: 6,
      },
      {
        cidade: 'Pequeri',
        ufId: 11,
      },
      {
        cidade: 'Pequi',
        ufId: 11,
      },
      {
        cidade: 'Pequizeiro',
        ufId: 27,
      },
      {
        cidade: 'Perdigão',
        ufId: 11,
      },
      {
        cidade: 'Perdizes',
        ufId: 11,
      },
      {
        cidade: 'Perdões',
        ufId: 11,
      },
      {
        cidade: 'Pereira Barreto',
        ufId: 26,
      },
      {
        cidade: 'Pereiras',
        ufId: 26,
      },
      {
        cidade: 'Pereiro',
        ufId: 6,
      },
      {
        cidade: 'Peri Mirim',
        ufId: 10,
      },
      {
        cidade: 'Periquito',
        ufId: 11,
      },
      {
        cidade: 'Peritiba',
        ufId: 24,
      },
      {
        cidade: 'Peritoró',
        ufId: 10,
      },
      {
        cidade: 'Perobal',
        ufId: 18,
      },
      {
        cidade: 'Pérola',
        ufId: 18,
      },
      {
        cidade: "Pérola d'Oeste",
        ufId: 18,
      },
      {
        cidade: 'Perolândia',
        ufId: 9,
      },
      {
        cidade: 'Peruíbe',
        ufId: 26,
      },
      {
        cidade: 'Pescador',
        ufId: 11,
      },
      {
        cidade: 'Pescaria Brava',
        ufId: 24,
      },
      {
        cidade: 'Pesqueira',
        ufId: 16,
      },
      {
        cidade: 'Petrolândia',
        ufId: 16,
      },
      {
        cidade: 'Petrolândia',
        ufId: 24,
      },
      {
        cidade: 'Petrolina',
        ufId: 16,
      },
      {
        cidade: 'Petrolina de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Petrópolis',
        ufId: 19,
      },
      {
        cidade: 'Piaçabuçu',
        ufId: 2,
      },
      {
        cidade: 'Piacatu',
        ufId: 26,
      },
      {
        cidade: 'Piancó',
        ufId: 15,
      },
      {
        cidade: 'Piatã',
        ufId: 5,
      },
      {
        cidade: 'Piau',
        ufId: 11,
      },
      {
        cidade: 'Picada Café',
        ufId: 23,
      },
      {
        cidade: 'Piçarra',
        ufId: 14,
      },
      {
        cidade: 'Picos',
        ufId: 17,
      },
      {
        cidade: 'Picuí',
        ufId: 15,
      },
      {
        cidade: 'Piedade',
        ufId: 26,
      },
      {
        cidade: 'Piedade de Caratinga',
        ufId: 11,
      },
      {
        cidade: 'Piedade de Ponte Nova',
        ufId: 11,
      },
      {
        cidade: 'Piedade do Rio Grande',
        ufId: 11,
      },
      {
        cidade: 'Piedade dos Gerais',
        ufId: 11,
      },
      {
        cidade: 'Piên',
        ufId: 18,
      },
      {
        cidade: 'Pilão Arcado',
        ufId: 5,
      },
      {
        cidade: 'Pilar',
        ufId: 15,
      },
      {
        cidade: 'Pilar',
        ufId: 2,
      },
      {
        cidade: 'Pilar de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Pilar do Sul',
        ufId: 26,
      },
      {
        cidade: 'Pilões',
        ufId: 20,
      },
      {
        cidade: 'Pilões',
        ufId: 15,
      },
      {
        cidade: 'Pilõezinhos',
        ufId: 15,
      },
      {
        cidade: 'Pimenta',
        ufId: 11,
      },
      {
        cidade: 'Pimenta Bueno',
        ufId: 21,
      },
      {
        cidade: 'Pimenteiras',
        ufId: 17,
      },
      {
        cidade: 'Pimenteiras do Oeste',
        ufId: 21,
      },
      {
        cidade: 'Pindaí',
        ufId: 5,
      },
      {
        cidade: 'Pindamonhangaba',
        ufId: 26,
      },
      {
        cidade: 'Pindaré-Mirim',
        ufId: 10,
      },
      {
        cidade: 'Pindoba',
        ufId: 2,
      },
      {
        cidade: 'Pindobaçu',
        ufId: 5,
      },
      {
        cidade: 'Pindorama',
        ufId: 26,
      },
      {
        cidade: 'Pindorama do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Pindoretama',
        ufId: 6,
      },
      {
        cidade: "Pingo-d'Água",
        ufId: 11,
      },
      {
        cidade: 'Pinhais',
        ufId: 18,
      },
      {
        cidade: 'Pinhal',
        ufId: 23,
      },
      {
        cidade: 'Pinhal da Serra',
        ufId: 23,
      },
      {
        cidade: 'Pinhal de São Bento',
        ufId: 18,
      },
      {
        cidade: 'Pinhal Grande',
        ufId: 23,
      },
      {
        cidade: 'Pinhalão',
        ufId: 18,
      },
      {
        cidade: 'Pinhalzinho',
        ufId: 26,
      },
      {
        cidade: 'Pinhalzinho',
        ufId: 24,
      },
      {
        cidade: 'Pinhão',
        ufId: 25,
      },
      {
        cidade: 'Pinhão',
        ufId: 18,
      },
      {
        cidade: 'Pinheiral',
        ufId: 19,
      },
      {
        cidade: 'Pinheirinho do Vale',
        ufId: 23,
      },
      {
        cidade: 'Pinheiro',
        ufId: 10,
      },
      {
        cidade: 'Pinheiro Machado',
        ufId: 23,
      },
      {
        cidade: 'Pinheiro Preto',
        ufId: 24,
      },
      {
        cidade: 'Pinheiros',
        ufId: 8,
      },
      {
        cidade: 'Pintadas',
        ufId: 5,
      },
      {
        cidade: 'Pinto Bandeira',
        ufId: 23,
      },
      {
        cidade: 'Pintópolis',
        ufId: 11,
      },
      {
        cidade: 'Pio IX',
        ufId: 17,
      },
      {
        cidade: 'Pio XII',
        ufId: 10,
      },
      {
        cidade: 'Piquerobi',
        ufId: 26,
      },
      {
        cidade: 'Piquet Carneiro',
        ufId: 6,
      },
      {
        cidade: 'Piquete',
        ufId: 26,
      },
      {
        cidade: 'Piracaia',
        ufId: 26,
      },
      {
        cidade: 'Piracanjuba',
        ufId: 9,
      },
      {
        cidade: 'Piracema',
        ufId: 11,
      },
      {
        cidade: 'Piracicaba',
        ufId: 26,
      },
      {
        cidade: 'Piracuruca',
        ufId: 17,
      },
      {
        cidade: 'Piraí',
        ufId: 19,
      },
      {
        cidade: 'Piraí do Norte',
        ufId: 5,
      },
      {
        cidade: 'Piraí do Sul',
        ufId: 18,
      },
      {
        cidade: 'Piraju',
        ufId: 26,
      },
      {
        cidade: 'Pirajuba',
        ufId: 11,
      },
      {
        cidade: 'Pirajuí',
        ufId: 26,
      },
      {
        cidade: 'Pirambu',
        ufId: 25,
      },
      {
        cidade: 'Piranga',
        ufId: 11,
      },
      {
        cidade: 'Pirangi',
        ufId: 26,
      },
      {
        cidade: 'Piranguçu',
        ufId: 11,
      },
      {
        cidade: 'Piranguinho',
        ufId: 11,
      },
      {
        cidade: 'Piranhas',
        ufId: 2,
      },
      {
        cidade: 'Piranhas',
        ufId: 9,
      },
      {
        cidade: 'Pirapemas',
        ufId: 10,
      },
      {
        cidade: 'Pirapetinga',
        ufId: 11,
      },
      {
        cidade: 'Pirapó',
        ufId: 23,
      },
      {
        cidade: 'Pirapora',
        ufId: 11,
      },
      {
        cidade: 'Pirapora do Bom Jesus',
        ufId: 26,
      },
      {
        cidade: 'Pirapozinho',
        ufId: 26,
      },
      {
        cidade: 'Piraquara',
        ufId: 18,
      },
      {
        cidade: 'Piraquê',
        ufId: 27,
      },
      {
        cidade: 'Pirassununga',
        ufId: 26,
      },
      {
        cidade: 'Piratini',
        ufId: 23,
      },
      {
        cidade: 'Piratininga',
        ufId: 26,
      },
      {
        cidade: 'Piratuba',
        ufId: 24,
      },
      {
        cidade: 'Piraúba',
        ufId: 11,
      },
      {
        cidade: 'Pirenópolis',
        ufId: 9,
      },
      {
        cidade: 'Pires do Rio',
        ufId: 9,
      },
      {
        cidade: 'Pires Ferreira',
        ufId: 6,
      },
      {
        cidade: 'Piripá',
        ufId: 5,
      },
      {
        cidade: 'Piripiri',
        ufId: 17,
      },
      {
        cidade: 'Piritiba',
        ufId: 5,
      },
      {
        cidade: 'Pirpirituba',
        ufId: 15,
      },
      {
        cidade: 'Pitanga',
        ufId: 18,
      },
      {
        cidade: 'Pitangueiras',
        ufId: 26,
      },
      {
        cidade: 'Pitangueiras',
        ufId: 18,
      },
      {
        cidade: 'Pitangui',
        ufId: 11,
      },
      {
        cidade: 'Pitimbu',
        ufId: 15,
      },
      {
        cidade: 'Pium',
        ufId: 27,
      },
      {
        cidade: 'Piúma',
        ufId: 8,
      },
      {
        cidade: 'Piumhi',
        ufId: 11,
      },
      {
        cidade: 'Placas',
        ufId: 14,
      },
      {
        cidade: 'Plácido de Castro',
        ufId: 1,
      },
      {
        cidade: 'Planaltina',
        ufId: 9,
      },
      {
        cidade: 'Planaltina do Paraná',
        ufId: 18,
      },
      {
        cidade: 'Planaltino',
        ufId: 5,
      },
      {
        cidade: 'Planalto',
        ufId: 5,
      },
      {
        cidade: 'Planalto',
        ufId: 23,
      },
      {
        cidade: 'Planalto',
        ufId: 26,
      },
      {
        cidade: 'Planalto',
        ufId: 18,
      },
      {
        cidade: 'Planalto Alegre',
        ufId: 24,
      },
      {
        cidade: 'Planalto da Serra',
        ufId: 13,
      },
      {
        cidade: 'Planura',
        ufId: 11,
      },
      {
        cidade: 'Platina',
        ufId: 26,
      },
      {
        cidade: 'Poá',
        ufId: 26,
      },
      {
        cidade: 'Poção',
        ufId: 16,
      },
      {
        cidade: 'Poção de Pedras',
        ufId: 10,
      },
      {
        cidade: 'Pocinhos',
        ufId: 15,
      },
      {
        cidade: 'Poço Branco',
        ufId: 20,
      },
      {
        cidade: 'Poço Dantas',
        ufId: 15,
      },
      {
        cidade: 'Poço das Antas',
        ufId: 23,
      },
      {
        cidade: 'Poço das Trincheiras',
        ufId: 2,
      },
      {
        cidade: 'Poço de José de Moura',
        ufId: 15,
      },
      {
        cidade: 'Poço Fundo',
        ufId: 11,
      },
      {
        cidade: 'Poço Redondo',
        ufId: 25,
      },
      {
        cidade: 'Poço Verde',
        ufId: 25,
      },
      {
        cidade: 'Poções',
        ufId: 5,
      },
      {
        cidade: 'Poconé',
        ufId: 13,
      },
      {
        cidade: 'Poços de Caldas',
        ufId: 11,
      },
      {
        cidade: 'Pocrane',
        ufId: 11,
      },
      {
        cidade: 'Pojuca',
        ufId: 5,
      },
      {
        cidade: 'Poloni',
        ufId: 26,
      },
      {
        cidade: 'Pombal',
        ufId: 15,
      },
      {
        cidade: 'Pombos',
        ufId: 16,
      },
      {
        cidade: 'Pomerode',
        ufId: 24,
      },
      {
        cidade: 'Pompéia',
        ufId: 26,
      },
      {
        cidade: 'Pompéu',
        ufId: 11,
      },
      {
        cidade: 'Pongaí',
        ufId: 26,
      },
      {
        cidade: 'Ponta de Pedras',
        ufId: 14,
      },
      {
        cidade: 'Ponta Grossa',
        ufId: 18,
      },
      {
        cidade: 'Ponta Porã',
        ufId: 12,
      },
      {
        cidade: 'Pontal',
        ufId: 26,
      },
      {
        cidade: 'Pontal do Araguaia',
        ufId: 13,
      },
      {
        cidade: 'Pontal do Paraná',
        ufId: 18,
      },
      {
        cidade: 'Pontalina',
        ufId: 9,
      },
      {
        cidade: 'Pontalinda',
        ufId: 26,
      },
      {
        cidade: 'Pontão',
        ufId: 23,
      },
      {
        cidade: 'Ponte Alta',
        ufId: 24,
      },
      {
        cidade: 'Ponte Alta do Bom Jesus',
        ufId: 27,
      },
      {
        cidade: 'Ponte Alta do Norte',
        ufId: 24,
      },
      {
        cidade: 'Ponte Alta do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Ponte Branca',
        ufId: 13,
      },
      {
        cidade: 'Ponte Nova',
        ufId: 11,
      },
      {
        cidade: 'Ponte Preta',
        ufId: 23,
      },
      {
        cidade: 'Ponte Serrada',
        ufId: 24,
      },
      {
        cidade: 'Pontes e Lacerda',
        ufId: 13,
      },
      {
        cidade: 'Pontes Gestal',
        ufId: 26,
      },
      {
        cidade: 'Ponto Belo',
        ufId: 8,
      },
      {
        cidade: 'Ponto Chique',
        ufId: 11,
      },
      {
        cidade: 'Ponto dos Volantes',
        ufId: 11,
      },
      {
        cidade: 'Ponto Novo',
        ufId: 5,
      },
      {
        cidade: 'Populina',
        ufId: 26,
      },
      {
        cidade: 'Poranga',
        ufId: 6,
      },
      {
        cidade: 'Porangaba',
        ufId: 26,
      },
      {
        cidade: 'Porangatu',
        ufId: 9,
      },
      {
        cidade: 'Porciúncula',
        ufId: 19,
      },
      {
        cidade: 'Porecatu',
        ufId: 18,
      },
      {
        cidade: 'Portalegre',
        ufId: 20,
      },
      {
        cidade: 'Portão',
        ufId: 23,
      },
      {
        cidade: 'Porteirão',
        ufId: 9,
      },
      {
        cidade: 'Porteiras',
        ufId: 6,
      },
      {
        cidade: 'Porteirinha',
        ufId: 11,
      },
      {
        cidade: 'Portel',
        ufId: 14,
      },
      {
        cidade: 'Portelândia',
        ufId: 9,
      },
      {
        cidade: 'Porto',
        ufId: 17,
      },
      {
        cidade: 'Porto Acre',
        ufId: 1,
      },
      {
        cidade: 'Porto Alegre',
        ufId: 23,
      },
      {
        cidade: 'Porto Alegre do Norte',
        ufId: 13,
      },
      {
        cidade: 'Porto Alegre do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Porto Alegre do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Porto Amazonas',
        ufId: 18,
      },
      {
        cidade: 'Porto Barreiro',
        ufId: 18,
      },
      {
        cidade: 'Porto Belo',
        ufId: 24,
      },
      {
        cidade: 'Porto Calvo',
        ufId: 2,
      },
      {
        cidade: 'Porto da Folha',
        ufId: 25,
      },
      {
        cidade: 'Porto de Moz',
        ufId: 14,
      },
      {
        cidade: 'Porto de Pedras',
        ufId: 2,
      },
      {
        cidade: 'Porto do Mangue',
        ufId: 20,
      },
      {
        cidade: 'Porto dos Gaúchos',
        ufId: 13,
      },
      {
        cidade: 'Porto Esperidião',
        ufId: 13,
      },
      {
        cidade: 'Porto Estrela',
        ufId: 13,
      },
      {
        cidade: 'Porto Feliz',
        ufId: 26,
      },
      {
        cidade: 'Porto Ferreira',
        ufId: 26,
      },
      {
        cidade: 'Porto Firme',
        ufId: 11,
      },
      {
        cidade: 'Porto Franco',
        ufId: 10,
      },
      {
        cidade: 'Porto Grande',
        ufId: 4,
      },
      {
        cidade: 'Porto Lucena',
        ufId: 23,
      },
      {
        cidade: 'Porto Mauá',
        ufId: 23,
      },
      {
        cidade: 'Porto Murtinho',
        ufId: 12,
      },
      {
        cidade: 'Porto Nacional',
        ufId: 27,
      },
      {
        cidade: 'Porto Real',
        ufId: 19,
      },
      {
        cidade: 'Porto Real do Colégio',
        ufId: 2,
      },
      {
        cidade: 'Porto Rico',
        ufId: 18,
      },
      {
        cidade: 'Porto Rico do Maranhão',
        ufId: 10,
      },
      {
        cidade: 'Porto Seguro',
        ufId: 5,
      },
      {
        cidade: 'Porto União',
        ufId: 24,
      },
      {
        cidade: 'Porto Velho',
        ufId: 21,
      },
      {
        cidade: 'Porto Vera Cruz',
        ufId: 23,
      },
      {
        cidade: 'Porto Vitória',
        ufId: 18,
      },
      {
        cidade: 'Porto Walter',
        ufId: 1,
      },
      {
        cidade: 'Porto Xavier',
        ufId: 23,
      },
      {
        cidade: 'Posse',
        ufId: 9,
      },
      {
        cidade: 'Poté',
        ufId: 11,
      },
      {
        cidade: 'Potengi',
        ufId: 6,
      },
      {
        cidade: 'Potim',
        ufId: 26,
      },
      {
        cidade: 'Potiraguá',
        ufId: 5,
      },
      {
        cidade: 'Potirendaba',
        ufId: 26,
      },
      {
        cidade: 'Potiretama',
        ufId: 6,
      },
      {
        cidade: 'Pouso Alegre',
        ufId: 11,
      },
      {
        cidade: 'Pouso Alto',
        ufId: 11,
      },
      {
        cidade: 'Pouso Novo',
        ufId: 23,
      },
      {
        cidade: 'Pouso Redondo',
        ufId: 24,
      },
      {
        cidade: 'Poxoréu',
        ufId: 13,
      },
      {
        cidade: 'Pracinha',
        ufId: 26,
      },
      {
        cidade: 'Pracuúba',
        ufId: 4,
      },
      {
        cidade: 'Prado',
        ufId: 5,
      },
      {
        cidade: 'Prado Ferreira',
        ufId: 18,
      },
      {
        cidade: 'Pradópolis',
        ufId: 26,
      },
      {
        cidade: 'Prados',
        ufId: 11,
      },
      {
        cidade: 'Praia Grande',
        ufId: 26,
      },
      {
        cidade: 'Praia Grande',
        ufId: 24,
      },
      {
        cidade: 'Praia Norte',
        ufId: 27,
      },
      {
        cidade: 'Prainha',
        ufId: 14,
      },
      {
        cidade: 'Pranchita',
        ufId: 18,
      },
      {
        cidade: 'Prata',
        ufId: 11,
      },
      {
        cidade: 'Prata',
        ufId: 15,
      },
      {
        cidade: 'Prata do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Pratânia',
        ufId: 26,
      },
      {
        cidade: 'Pratápolis',
        ufId: 11,
      },
      {
        cidade: 'Pratinha',
        ufId: 11,
      },
      {
        cidade: 'Presidente Alves',
        ufId: 26,
      },
      {
        cidade: 'Presidente Bernardes',
        ufId: 26,
      },
      {
        cidade: 'Presidente Bernardes',
        ufId: 11,
      },
      {
        cidade: 'Presidente Castello Branco',
        ufId: 24,
      },
      {
        cidade: 'Presidente Castelo Branco',
        ufId: 18,
      },
      {
        cidade: 'Presidente Dutra',
        ufId: 5,
      },
      {
        cidade: 'Presidente Dutra',
        ufId: 10,
      },
      {
        cidade: 'Presidente Epitácio',
        ufId: 26,
      },
      {
        cidade: 'Presidente Figueiredo',
        ufId: 3,
      },
      {
        cidade: 'Presidente Getúlio',
        ufId: 24,
      },
      {
        cidade: 'Presidente Jânio Quadros',
        ufId: 5,
      },
      {
        cidade: 'Presidente Juscelino',
        ufId: 11,
      },
      {
        cidade: 'Presidente Juscelino',
        ufId: 10,
      },
      {
        cidade: 'Presidente Kennedy',
        ufId: 27,
      },
      {
        cidade: 'Presidente Kennedy',
        ufId: 8,
      },
      {
        cidade: 'Presidente Kubitschek',
        ufId: 11,
      },
      {
        cidade: 'Presidente Lucena',
        ufId: 23,
      },
      {
        cidade: 'Presidente Médici',
        ufId: 21,
      },
      {
        cidade: 'Presidente Médici',
        ufId: 10,
      },
      {
        cidade: 'Presidente Nereu',
        ufId: 24,
      },
      {
        cidade: 'Presidente Olegário',
        ufId: 11,
      },
      {
        cidade: 'Presidente Prudente',
        ufId: 26,
      },
      {
        cidade: 'Presidente Sarney',
        ufId: 10,
      },
      {
        cidade: 'Presidente Tancredo Neves',
        ufId: 5,
      },
      {
        cidade: 'Presidente Vargas',
        ufId: 10,
      },
      {
        cidade: 'Presidente Venceslau',
        ufId: 26,
      },
      {
        cidade: 'Primavera',
        ufId: 16,
      },
      {
        cidade: 'Primavera',
        ufId: 14,
      },
      {
        cidade: 'Primavera de Rondônia',
        ufId: 21,
      },
      {
        cidade: 'Primavera do Leste',
        ufId: 13,
      },
      {
        cidade: 'Primeira Cruz',
        ufId: 10,
      },
      {
        cidade: 'Primeiro de Maio',
        ufId: 18,
      },
      {
        cidade: 'Princesa',
        ufId: 24,
      },
      {
        cidade: 'Princesa Isabel',
        ufId: 15,
      },
      {
        cidade: 'Professor Jamil',
        ufId: 9,
      },
      {
        cidade: 'Progresso',
        ufId: 23,
      },
      {
        cidade: 'Promissão',
        ufId: 26,
      },
      {
        cidade: 'Propriá',
        ufId: 25,
      },
      {
        cidade: 'Protásio Alves',
        ufId: 23,
      },
      {
        cidade: 'Prudente de Morais',
        ufId: 11,
      },
      {
        cidade: 'Prudentópolis',
        ufId: 18,
      },
      {
        cidade: 'Pugmil',
        ufId: 27,
      },
      {
        cidade: 'Pureza',
        ufId: 20,
      },
      {
        cidade: 'Putinga',
        ufId: 23,
      },
      {
        cidade: 'Puxinanã',
        ufId: 15,
      },
      {
        cidade: 'Quadra',
        ufId: 26,
      },
      {
        cidade: 'Quaraí',
        ufId: 23,
      },
      {
        cidade: 'Quartel Geral',
        ufId: 11,
      },
      {
        cidade: 'Quarto Centenário',
        ufId: 18,
      },
      {
        cidade: 'Quatá',
        ufId: 26,
      },
      {
        cidade: 'Quatiguá',
        ufId: 18,
      },
      {
        cidade: 'Quatipuru',
        ufId: 14,
      },
      {
        cidade: 'Quatis',
        ufId: 19,
      },
      {
        cidade: 'Quatro Barras',
        ufId: 18,
      },
      {
        cidade: 'Quatro Irmãos',
        ufId: 23,
      },
      {
        cidade: 'Quatro Pontes',
        ufId: 18,
      },
      {
        cidade: 'Quebrangulo',
        ufId: 2,
      },
      {
        cidade: 'Quedas do Iguaçu',
        ufId: 18,
      },
      {
        cidade: 'Queimada Nova',
        ufId: 17,
      },
      {
        cidade: 'Queimadas',
        ufId: 15,
      },
      {
        cidade: 'Queimadas',
        ufId: 5,
      },
      {
        cidade: 'Queimados',
        ufId: 19,
      },
      {
        cidade: 'Queiroz',
        ufId: 26,
      },
      {
        cidade: 'Queluz',
        ufId: 26,
      },
      {
        cidade: 'Queluzito',
        ufId: 11,
      },
      {
        cidade: 'Querência',
        ufId: 13,
      },
      {
        cidade: 'Querência do Norte',
        ufId: 18,
      },
      {
        cidade: 'Quevedos',
        ufId: 23,
      },
      {
        cidade: 'Quijingue',
        ufId: 5,
      },
      {
        cidade: 'Quilombo',
        ufId: 24,
      },
      {
        cidade: 'Quinta do Sol',
        ufId: 18,
      },
      {
        cidade: 'Quintana',
        ufId: 26,
      },
      {
        cidade: 'Quinze de Novembro',
        ufId: 23,
      },
      {
        cidade: 'Quipapá',
        ufId: 16,
      },
      {
        cidade: 'Quirinópolis',
        ufId: 9,
      },
      {
        cidade: 'Quissamã',
        ufId: 19,
      },
      {
        cidade: 'Quitandinha',
        ufId: 18,
      },
      {
        cidade: 'Quiterianópolis',
        ufId: 6,
      },
      {
        cidade: 'Quixabá',
        ufId: 15,
      },
      {
        cidade: 'Quixaba',
        ufId: 16,
      },
      {
        cidade: 'Quixabeira',
        ufId: 5,
      },
      {
        cidade: 'Quixadá',
        ufId: 6,
      },
      {
        cidade: 'Quixelô',
        ufId: 6,
      },
      {
        cidade: 'Quixeramobim',
        ufId: 6,
      },
      {
        cidade: 'Quixeré',
        ufId: 6,
      },
      {
        cidade: 'Rafael Fernandes',
        ufId: 20,
      },
      {
        cidade: 'Rafael Godeiro',
        ufId: 20,
      },
      {
        cidade: 'Rafael Jambeiro',
        ufId: 5,
      },
      {
        cidade: 'Rafard',
        ufId: 26,
      },
      {
        cidade: 'Ramilândia',
        ufId: 18,
      },
      {
        cidade: 'Rancharia',
        ufId: 26,
      },
      {
        cidade: 'Rancho Alegre',
        ufId: 18,
      },
      {
        cidade: "Rancho Alegre D'Oeste",
        ufId: 18,
      },
      {
        cidade: 'Rancho Queimado',
        ufId: 24,
      },
      {
        cidade: 'Raposa',
        ufId: 10,
      },
      {
        cidade: 'Raposos',
        ufId: 11,
      },
      {
        cidade: 'Raul Soares',
        ufId: 11,
      },
      {
        cidade: 'Realeza',
        ufId: 18,
      },
      {
        cidade: 'Rebouças',
        ufId: 18,
      },
      {
        cidade: 'Recife',
        ufId: 16,
      },
      {
        cidade: 'Recreio',
        ufId: 11,
      },
      {
        cidade: 'Recursolândia',
        ufId: 27,
      },
      {
        cidade: 'Redenção',
        ufId: 14,
      },
      {
        cidade: 'Redenção',
        ufId: 6,
      },
      {
        cidade: 'Redenção da Serra',
        ufId: 26,
      },
      {
        cidade: 'Redenção do Gurguéia',
        ufId: 17,
      },
      {
        cidade: 'Redentora',
        ufId: 23,
      },
      {
        cidade: 'Reduto',
        ufId: 11,
      },
      {
        cidade: 'Regeneração',
        ufId: 17,
      },
      {
        cidade: 'Regente Feijó',
        ufId: 26,
      },
      {
        cidade: 'Reginópolis',
        ufId: 26,
      },
      {
        cidade: 'Registro',
        ufId: 26,
      },
      {
        cidade: 'Relvado',
        ufId: 23,
      },
      {
        cidade: 'Remanso',
        ufId: 5,
      },
      {
        cidade: 'Remígio',
        ufId: 15,
      },
      {
        cidade: 'Renascença',
        ufId: 18,
      },
      {
        cidade: 'Reriutaba',
        ufId: 6,
      },
      {
        cidade: 'Resende',
        ufId: 19,
      },
      {
        cidade: 'Resende Costa',
        ufId: 11,
      },
      {
        cidade: 'Reserva',
        ufId: 18,
      },
      {
        cidade: 'Reserva do Cabaçal',
        ufId: 13,
      },
      {
        cidade: 'Reserva do Iguaçu',
        ufId: 18,
      },
      {
        cidade: 'Resplendor',
        ufId: 11,
      },
      {
        cidade: 'Ressaquinha',
        ufId: 11,
      },
      {
        cidade: 'Restinga',
        ufId: 26,
      },
      {
        cidade: 'Restinga Sêca',
        ufId: 23,
      },
      {
        cidade: 'Retirolândia',
        ufId: 5,
      },
      {
        cidade: 'Riachão',
        ufId: 15,
      },
      {
        cidade: 'Riachão',
        ufId: 10,
      },
      {
        cidade: 'Riachão das Neves',
        ufId: 5,
      },
      {
        cidade: 'Riachão do Bacamarte',
        ufId: 15,
      },
      {
        cidade: 'Riachão do Dantas',
        ufId: 25,
      },
      {
        cidade: 'Riachão do Jacuípe',
        ufId: 5,
      },
      {
        cidade: 'Riachão do Poço',
        ufId: 15,
      },
      {
        cidade: 'Riachinho',
        ufId: 27,
      },
      {
        cidade: 'Riachinho',
        ufId: 11,
      },
      {
        cidade: 'Riacho da Cruz',
        ufId: 20,
      },
      {
        cidade: 'Riacho das Almas',
        ufId: 16,
      },
      {
        cidade: 'Riacho de Santana',
        ufId: 20,
      },
      {
        cidade: 'Riacho de Santana',
        ufId: 5,
      },
      {
        cidade: 'Riacho de Santo Antônio',
        ufId: 15,
      },
      {
        cidade: 'Riacho dos Cavalos',
        ufId: 15,
      },
      {
        cidade: 'Riacho dos Machados',
        ufId: 11,
      },
      {
        cidade: 'Riacho Frio',
        ufId: 17,
      },
      {
        cidade: 'Riachuelo',
        ufId: 20,
      },
      {
        cidade: 'Riachuelo',
        ufId: 25,
      },
      {
        cidade: 'Rialma',
        ufId: 9,
      },
      {
        cidade: 'Rianápolis',
        ufId: 9,
      },
      {
        cidade: 'Ribamar Fiquene',
        ufId: 10,
      },
      {
        cidade: 'Ribas do Rio Pardo',
        ufId: 12,
      },
      {
        cidade: 'Ribeira',
        ufId: 26,
      },
      {
        cidade: 'Ribeira do Amparo',
        ufId: 5,
      },
      {
        cidade: 'Ribeira do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Ribeira do Pombal',
        ufId: 5,
      },
      {
        cidade: 'Ribeirão',
        ufId: 16,
      },
      {
        cidade: 'Ribeirão Bonito',
        ufId: 26,
      },
      {
        cidade: 'Ribeirão Branco',
        ufId: 26,
      },
      {
        cidade: 'Ribeirão Cascalheira',
        ufId: 13,
      },
      {
        cidade: 'Ribeirão Claro',
        ufId: 18,
      },
      {
        cidade: 'Ribeirão Corrente',
        ufId: 26,
      },
      {
        cidade: 'Ribeirão das Neves',
        ufId: 11,
      },
      {
        cidade: 'Ribeirão do Largo',
        ufId: 5,
      },
      {
        cidade: 'Ribeirão do Pinhal',
        ufId: 18,
      },
      {
        cidade: 'Ribeirão do Sul',
        ufId: 26,
      },
      {
        cidade: 'Ribeirão dos Índios',
        ufId: 26,
      },
      {
        cidade: 'Ribeirão Grande',
        ufId: 26,
      },
      {
        cidade: 'Ribeirão Pires',
        ufId: 26,
      },
      {
        cidade: 'Ribeirão Preto',
        ufId: 26,
      },
      {
        cidade: 'Ribeirão Vermelho',
        ufId: 11,
      },
      {
        cidade: 'Ribeirãozinho',
        ufId: 13,
      },
      {
        cidade: 'Ribeiro Gonçalves',
        ufId: 17,
      },
      {
        cidade: 'Ribeirópolis',
        ufId: 25,
      },
      {
        cidade: 'Rifaina',
        ufId: 26,
      },
      {
        cidade: 'Rincão',
        ufId: 26,
      },
      {
        cidade: 'Rinópolis',
        ufId: 26,
      },
      {
        cidade: 'Rio Acima',
        ufId: 11,
      },
      {
        cidade: 'Rio Azul',
        ufId: 18,
      },
      {
        cidade: 'Rio Bananal',
        ufId: 8,
      },
      {
        cidade: 'Rio Bom',
        ufId: 18,
      },
      {
        cidade: 'Rio Bonito',
        ufId: 19,
      },
      {
        cidade: 'Rio Bonito do Iguaçu',
        ufId: 18,
      },
      {
        cidade: 'Rio Branco',
        ufId: 13,
      },
      {
        cidade: 'Rio Branco',
        ufId: 1,
      },
      {
        cidade: 'Rio Branco do Ivaí',
        ufId: 18,
      },
      {
        cidade: 'Rio Branco do Sul',
        ufId: 18,
      },
      {
        cidade: 'Rio Brilhante',
        ufId: 12,
      },
      {
        cidade: 'Rio Casca',
        ufId: 11,
      },
      {
        cidade: 'Rio Claro',
        ufId: 19,
      },
      {
        cidade: 'Rio Claro',
        ufId: 26,
      },
      {
        cidade: 'Rio Crespo',
        ufId: 21,
      },
      {
        cidade: 'Rio da Conceição',
        ufId: 27,
      },
      {
        cidade: 'Rio das Antas',
        ufId: 24,
      },
      {
        cidade: 'Rio das Flores',
        ufId: 19,
      },
      {
        cidade: 'Rio das Ostras',
        ufId: 19,
      },
      {
        cidade: 'Rio das Pedras',
        ufId: 26,
      },
      {
        cidade: 'Rio de Contas',
        ufId: 5,
      },
      {
        cidade: 'Rio de Janeiro',
        ufId: 19,
      },
      {
        cidade: 'Rio do Antônio',
        ufId: 5,
      },
      {
        cidade: 'Rio do Campo',
        ufId: 24,
      },
      {
        cidade: 'Rio do Fogo',
        ufId: 20,
      },
      {
        cidade: 'Rio do Oeste',
        ufId: 24,
      },
      {
        cidade: 'Rio do Pires',
        ufId: 5,
      },
      {
        cidade: 'Rio do Prado',
        ufId: 11,
      },
      {
        cidade: 'Rio do Sul',
        ufId: 24,
      },
      {
        cidade: 'Rio Doce',
        ufId: 11,
      },
      {
        cidade: 'Rio dos Bois',
        ufId: 27,
      },
      {
        cidade: 'Rio dos Cedros',
        ufId: 24,
      },
      {
        cidade: 'Rio dos Índios',
        ufId: 23,
      },
      {
        cidade: 'Rio Espera',
        ufId: 11,
      },
      {
        cidade: 'Rio Formoso',
        ufId: 16,
      },
      {
        cidade: 'Rio Fortuna',
        ufId: 24,
      },
      {
        cidade: 'Rio Grande',
        ufId: 23,
      },
      {
        cidade: 'Rio Grande da Serra',
        ufId: 26,
      },
      {
        cidade: 'Rio Grande do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Rio Largo',
        ufId: 2,
      },
      {
        cidade: 'Rio Manso',
        ufId: 11,
      },
      {
        cidade: 'Rio Maria',
        ufId: 14,
      },
      {
        cidade: 'Rio Negrinho',
        ufId: 24,
      },
      {
        cidade: 'Rio Negro',
        ufId: 12,
      },
      {
        cidade: 'Rio Negro',
        ufId: 18,
      },
      {
        cidade: 'Rio Novo',
        ufId: 11,
      },
      {
        cidade: 'Rio Novo do Sul',
        ufId: 8,
      },
      {
        cidade: 'Rio Paranaíba',
        ufId: 11,
      },
      {
        cidade: 'Rio Pardo',
        ufId: 23,
      },
      {
        cidade: 'Rio Pardo de Minas',
        ufId: 11,
      },
      {
        cidade: 'Rio Piracicaba',
        ufId: 11,
      },
      {
        cidade: 'Rio Pomba',
        ufId: 11,
      },
      {
        cidade: 'Rio Preto',
        ufId: 11,
      },
      {
        cidade: 'Rio Preto da Eva',
        ufId: 3,
      },
      {
        cidade: 'Rio Quente',
        ufId: 9,
      },
      {
        cidade: 'Rio Real',
        ufId: 5,
      },
      {
        cidade: 'Rio Rufino',
        ufId: 24,
      },
      {
        cidade: 'Rio Sono',
        ufId: 27,
      },
      {
        cidade: 'Rio Tinto',
        ufId: 15,
      },
      {
        cidade: 'Rio Verde',
        ufId: 9,
      },
      {
        cidade: 'Rio Verde de Mato Grosso',
        ufId: 12,
      },
      {
        cidade: 'Rio Vermelho',
        ufId: 11,
      },
      {
        cidade: 'Riolândia',
        ufId: 26,
      },
      {
        cidade: 'Riozinho',
        ufId: 23,
      },
      {
        cidade: 'Riqueza',
        ufId: 24,
      },
      {
        cidade: 'Ritápolis',
        ufId: 11,
      },
      {
        cidade: 'Riversul',
        ufId: 26,
      },
      {
        cidade: 'Roca Sales',
        ufId: 23,
      },
      {
        cidade: 'Rochedo',
        ufId: 12,
      },
      {
        cidade: 'Rochedo de Minas',
        ufId: 11,
      },
      {
        cidade: 'Rodeio',
        ufId: 24,
      },
      {
        cidade: 'Rodeio Bonito',
        ufId: 23,
      },
      {
        cidade: 'Rodeiro',
        ufId: 11,
      },
      {
        cidade: 'Rodelas',
        ufId: 5,
      },
      {
        cidade: 'Rodolfo Fernandes',
        ufId: 20,
      },
      {
        cidade: 'Rodrigues Alves',
        ufId: 1,
      },
      {
        cidade: 'Rolador',
        ufId: 23,
      },
      {
        cidade: 'Rolândia',
        ufId: 18,
      },
      {
        cidade: 'Rolante',
        ufId: 23,
      },
      {
        cidade: 'Rolim de Moura',
        ufId: 21,
      },
      {
        cidade: 'Romaria',
        ufId: 11,
      },
      {
        cidade: 'Romelândia',
        ufId: 24,
      },
      {
        cidade: 'Roncador',
        ufId: 18,
      },
      {
        cidade: 'Ronda Alta',
        ufId: 23,
      },
      {
        cidade: 'Rondinha',
        ufId: 23,
      },
      {
        cidade: 'Rondolândia',
        ufId: 13,
      },
      {
        cidade: 'Rondon',
        ufId: 18,
      },
      {
        cidade: 'Rondon do Pará',
        ufId: 14,
      },
      {
        cidade: 'Rondonópolis',
        ufId: 13,
      },
      {
        cidade: 'Roque Gonzales',
        ufId: 23,
      },
      {
        cidade: 'Rorainópolis',
        ufId: 22,
      },
      {
        cidade: 'Rosana',
        ufId: 26,
      },
      {
        cidade: 'Rosário',
        ufId: 10,
      },
      {
        cidade: 'Rosário da Limeira',
        ufId: 11,
      },
      {
        cidade: 'Rosário do Catete',
        ufId: 25,
      },
      {
        cidade: 'Rosário do Ivaí',
        ufId: 18,
      },
      {
        cidade: 'Rosário do Sul',
        ufId: 23,
      },
      {
        cidade: 'Rosário Oeste',
        ufId: 13,
      },
      {
        cidade: 'Roseira',
        ufId: 26,
      },
      {
        cidade: 'Roteiro',
        ufId: 2,
      },
      {
        cidade: 'Rubelita',
        ufId: 11,
      },
      {
        cidade: 'Rubiácea',
        ufId: 26,
      },
      {
        cidade: 'Rubiataba',
        ufId: 9,
      },
      {
        cidade: 'Rubim',
        ufId: 11,
      },
      {
        cidade: 'Rubinéia',
        ufId: 26,
      },
      {
        cidade: 'Rurópolis',
        ufId: 14,
      },
      {
        cidade: 'Russas',
        ufId: 6,
      },
      {
        cidade: 'Ruy Barbosa',
        ufId: 20,
      },
      {
        cidade: 'Ruy Barbosa',
        ufId: 5,
      },
      {
        cidade: 'Sabará',
        ufId: 11,
      },
      {
        cidade: 'Sabáudia',
        ufId: 18,
      },
      {
        cidade: 'Sabino',
        ufId: 26,
      },
      {
        cidade: 'Sabinópolis',
        ufId: 11,
      },
      {
        cidade: 'Saboeiro',
        ufId: 6,
      },
      {
        cidade: 'Sacramento',
        ufId: 11,
      },
      {
        cidade: 'Sagrada Família',
        ufId: 23,
      },
      {
        cidade: 'Sagres',
        ufId: 26,
      },
      {
        cidade: 'Sairé',
        ufId: 16,
      },
      {
        cidade: 'Saldanha Marinho',
        ufId: 23,
      },
      {
        cidade: 'Sales',
        ufId: 26,
      },
      {
        cidade: 'Sales Oliveira',
        ufId: 26,
      },
      {
        cidade: 'Salesópolis',
        ufId: 26,
      },
      {
        cidade: 'Salete',
        ufId: 24,
      },
      {
        cidade: 'Salgadinho',
        ufId: 15,
      },
      {
        cidade: 'Salgadinho',
        ufId: 16,
      },
      {
        cidade: 'Salgado',
        ufId: 25,
      },
      {
        cidade: 'Salgado de São Félix',
        ufId: 15,
      },
      {
        cidade: 'Salgado Filho',
        ufId: 18,
      },
      {
        cidade: 'Salgueiro',
        ufId: 16,
      },
      {
        cidade: 'Salinas',
        ufId: 11,
      },
      {
        cidade: 'Salinas da Margarida',
        ufId: 5,
      },
      {
        cidade: 'Salinópolis',
        ufId: 14,
      },
      {
        cidade: 'Salitre',
        ufId: 6,
      },
      {
        cidade: 'Salmourão',
        ufId: 26,
      },
      {
        cidade: 'Saloá',
        ufId: 16,
      },
      {
        cidade: 'Saltinho',
        ufId: 24,
      },
      {
        cidade: 'Saltinho',
        ufId: 26,
      },
      {
        cidade: 'Salto',
        ufId: 26,
      },
      {
        cidade: 'Salto da Divisa',
        ufId: 11,
      },
      {
        cidade: 'Salto de Pirapora',
        ufId: 26,
      },
      {
        cidade: 'Salto do Céu',
        ufId: 13,
      },
      {
        cidade: 'Salto do Itararé',
        ufId: 18,
      },
      {
        cidade: 'Salto do Jacuí',
        ufId: 23,
      },
      {
        cidade: 'Salto do Lontra',
        ufId: 18,
      },
      {
        cidade: 'Salto Grande',
        ufId: 26,
      },
      {
        cidade: 'Salto Veloso',
        ufId: 24,
      },
      {
        cidade: 'Salvador',
        ufId: 5,
      },
      {
        cidade: 'Salvador das Missões',
        ufId: 23,
      },
      {
        cidade: 'Salvador do Sul',
        ufId: 23,
      },
      {
        cidade: 'Salvaterra',
        ufId: 14,
      },
      {
        cidade: 'Sambaíba',
        ufId: 10,
      },
      {
        cidade: 'Sampaio',
        ufId: 27,
      },
      {
        cidade: 'Sananduva',
        ufId: 23,
      },
      {
        cidade: 'Sanclerlândia',
        ufId: 9,
      },
      {
        cidade: 'Sandolândia',
        ufId: 27,
      },
      {
        cidade: 'Sandovalina',
        ufId: 26,
      },
      {
        cidade: 'Sangão',
        ufId: 24,
      },
      {
        cidade: 'Sanharó',
        ufId: 16,
      },
      {
        cidade: "Sant'Ana do Livramento",
        ufId: 23,
      },
      {
        cidade: 'Santa Adélia',
        ufId: 26,
      },
      {
        cidade: 'Santa Albertina',
        ufId: 26,
      },
      {
        cidade: 'Santa Amélia',
        ufId: 18,
      },
      {
        cidade: 'Santa Bárbara',
        ufId: 5,
      },
      {
        cidade: 'Santa Bárbara',
        ufId: 11,
      },
      {
        cidade: "Santa Bárbara d'Oeste",
        ufId: 26,
      },
      {
        cidade: 'Santa Bárbara de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Santa Bárbara do Leste',
        ufId: 11,
      },
      {
        cidade: 'Santa Bárbara do Monte Verde',
        ufId: 11,
      },
      {
        cidade: 'Santa Bárbara do Pará',
        ufId: 14,
      },
      {
        cidade: 'Santa Bárbara do Sul',
        ufId: 23,
      },
      {
        cidade: 'Santa Bárbara do Tugúrio',
        ufId: 11,
      },
      {
        cidade: 'Santa Branca',
        ufId: 26,
      },
      {
        cidade: 'Santa Brígida',
        ufId: 5,
      },
      {
        cidade: 'Santa Carmem',
        ufId: 13,
      },
      {
        cidade: 'Santa Cecília',
        ufId: 24,
      },
      {
        cidade: 'Santa Cecília',
        ufId: 15,
      },
      {
        cidade: 'Santa Cecília do Pavão',
        ufId: 18,
      },
      {
        cidade: 'Santa Cecília do Sul',
        ufId: 23,
      },
      {
        cidade: "Santa Clara d'Oeste",
        ufId: 26,
      },
      {
        cidade: 'Santa Clara do Sul',
        ufId: 23,
      },
      {
        cidade: 'Santa Cruz',
        ufId: 20,
      },
      {
        cidade: 'Santa Cruz',
        ufId: 15,
      },
      {
        cidade: 'Santa Cruz',
        ufId: 16,
      },
      {
        cidade: 'Santa Cruz Cabrália',
        ufId: 5,
      },
      {
        cidade: 'Santa Cruz da Baixa Verde',
        ufId: 16,
      },
      {
        cidade: 'Santa Cruz da Conceição',
        ufId: 26,
      },
      {
        cidade: 'Santa Cruz da Esperança',
        ufId: 26,
      },
      {
        cidade: 'Santa Cruz da Vitória',
        ufId: 5,
      },
      {
        cidade: 'Santa Cruz das Palmeiras',
        ufId: 26,
      },
      {
        cidade: 'Santa Cruz de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Santa Cruz de Minas',
        ufId: 11,
      },
      {
        cidade: 'Santa Cruz de Monte Castelo',
        ufId: 18,
      },
      {
        cidade: 'Santa Cruz de Salinas',
        ufId: 11,
      },
      {
        cidade: 'Santa Cruz do Arari',
        ufId: 14,
      },
      {
        cidade: 'Santa Cruz do Capibaribe',
        ufId: 16,
      },
      {
        cidade: 'Santa Cruz do Escalvado',
        ufId: 11,
      },
      {
        cidade: 'Santa Cruz do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Santa Cruz do Rio Pardo',
        ufId: 26,
      },
      {
        cidade: 'Santa Cruz do Sul',
        ufId: 23,
      },
      {
        cidade: 'Santa Cruz do Xingu',
        ufId: 13,
      },
      {
        cidade: 'Santa Cruz dos Milagres',
        ufId: 17,
      },
      {
        cidade: 'Santa Efigênia de Minas',
        ufId: 11,
      },
      {
        cidade: 'Santa Ernestina',
        ufId: 26,
      },
      {
        cidade: 'Santa Fé',
        ufId: 18,
      },
      {
        cidade: 'Santa Fé de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Santa Fé de Minas',
        ufId: 11,
      },
      {
        cidade: 'Santa Fé do Araguaia',
        ufId: 27,
      },
      {
        cidade: 'Santa Fé do Sul',
        ufId: 26,
      },
      {
        cidade: 'Santa Filomena',
        ufId: 17,
      },
      {
        cidade: 'Santa Filomena',
        ufId: 16,
      },
      {
        cidade: 'Santa Filomena do Maranhão',
        ufId: 10,
      },
      {
        cidade: 'Santa Gertrudes',
        ufId: 26,
      },
      {
        cidade: 'Santa Helena',
        ufId: 18,
      },
      {
        cidade: 'Santa Helena',
        ufId: 24,
      },
      {
        cidade: 'Santa Helena',
        ufId: 10,
      },
      {
        cidade: 'Santa Helena',
        ufId: 15,
      },
      {
        cidade: 'Santa Helena de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Santa Helena de Minas',
        ufId: 11,
      },
      {
        cidade: 'Santa Inês',
        ufId: 5,
      },
      {
        cidade: 'Santa Inês',
        ufId: 18,
      },
      {
        cidade: 'Santa Inês',
        ufId: 15,
      },
      {
        cidade: 'Santa Inês',
        ufId: 10,
      },
      {
        cidade: 'Santa Isabel',
        ufId: 26,
      },
      {
        cidade: 'Santa Isabel',
        ufId: 9,
      },
      {
        cidade: 'Santa Isabel do Ivaí',
        ufId: 18,
      },
      {
        cidade: 'Santa Isabel do Rio Negro',
        ufId: 3,
      },
      {
        cidade: 'Santa Izabel do Oeste',
        ufId: 18,
      },
      {
        cidade: 'Santa Izabel do Pará',
        ufId: 14,
      },
      {
        cidade: 'Santa Juliana',
        ufId: 11,
      },
      {
        cidade: 'Santa Leopoldina',
        ufId: 8,
      },
      {
        cidade: 'Santa Lúcia',
        ufId: 26,
      },
      {
        cidade: 'Santa Lúcia',
        ufId: 18,
      },
      {
        cidade: 'Santa Luz',
        ufId: 17,
      },
      {
        cidade: 'Santa Luzia',
        ufId: 10,
      },
      {
        cidade: 'Santa Luzia',
        ufId: 5,
      },
      {
        cidade: 'Santa Luzia',
        ufId: 11,
      },
      {
        cidade: 'Santa Luzia',
        ufId: 15,
      },
      {
        cidade: "Santa Luzia D'Oeste",
        ufId: 21,
      },
      {
        cidade: 'Santa Luzia do Itanhy',
        ufId: 25,
      },
      {
        cidade: 'Santa Luzia do Norte',
        ufId: 2,
      },
      {
        cidade: 'Santa Luzia do Pará',
        ufId: 14,
      },
      {
        cidade: 'Santa Luzia do Paruá',
        ufId: 10,
      },
      {
        cidade: 'Santa Margarida',
        ufId: 11,
      },
      {
        cidade: 'Santa Margarida do Sul',
        ufId: 23,
      },
      {
        cidade: 'Santa Maria',
        ufId: 23,
      },
      {
        cidade: 'Santa Maria',
        ufId: 20,
      },
      {
        cidade: 'Santa Maria da Boa Vista',
        ufId: 16,
      },
      {
        cidade: 'Santa Maria da Serra',
        ufId: 26,
      },
      {
        cidade: 'Santa Maria da Vitória',
        ufId: 5,
      },
      {
        cidade: 'Santa Maria das Barreiras',
        ufId: 14,
      },
      {
        cidade: 'Santa Maria de Itabira',
        ufId: 11,
      },
      {
        cidade: 'Santa Maria de Jetibá',
        ufId: 8,
      },
      {
        cidade: 'Santa Maria do Cambucá',
        ufId: 16,
      },
      {
        cidade: 'Santa Maria do Herval',
        ufId: 23,
      },
      {
        cidade: 'Santa Maria do Oeste',
        ufId: 18,
      },
      {
        cidade: 'Santa Maria do Pará',
        ufId: 14,
      },
      {
        cidade: 'Santa Maria do Salto',
        ufId: 11,
      },
      {
        cidade: 'Santa Maria do Suaçuí',
        ufId: 11,
      },
      {
        cidade: 'Santa Maria do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Santa Maria Madalena',
        ufId: 19,
      },
      {
        cidade: 'Santa Mariana',
        ufId: 18,
      },
      {
        cidade: 'Santa Mercedes',
        ufId: 26,
      },
      {
        cidade: 'Santa Mônica',
        ufId: 18,
      },
      {
        cidade: 'Santa Quitéria',
        ufId: 6,
      },
      {
        cidade: 'Santa Quitéria do Maranhão',
        ufId: 10,
      },
      {
        cidade: 'Santa Rita',
        ufId: 10,
      },
      {
        cidade: 'Santa Rita',
        ufId: 15,
      },
      {
        cidade: "Santa Rita d'Oeste",
        ufId: 26,
      },
      {
        cidade: 'Santa Rita de Caldas',
        ufId: 11,
      },
      {
        cidade: 'Santa Rita de Cássia',
        ufId: 5,
      },
      {
        cidade: 'Santa Rita de Ibitipoca',
        ufId: 11,
      },
      {
        cidade: 'Santa Rita de Jacutinga',
        ufId: 11,
      },
      {
        cidade: 'Santa Rita de Minas',
        ufId: 11,
      },
      {
        cidade: 'Santa Rita do Araguaia',
        ufId: 9,
      },
      {
        cidade: 'Santa Rita do Itueto',
        ufId: 11,
      },
      {
        cidade: 'Santa Rita do Novo Destino',
        ufId: 9,
      },
      {
        cidade: 'Santa Rita do Pardo',
        ufId: 12,
      },
      {
        cidade: 'Santa Rita do Passa Quatro',
        ufId: 26,
      },
      {
        cidade: 'Santa Rita do Sapucaí',
        ufId: 11,
      },
      {
        cidade: 'Santa Rita do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Santa Rita do Trivelato',
        ufId: 13,
      },
      {
        cidade: 'Santa Rosa',
        ufId: 23,
      },
      {
        cidade: 'Santa Rosa da Serra',
        ufId: 11,
      },
      {
        cidade: 'Santa Rosa de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Santa Rosa de Lima',
        ufId: 24,
      },
      {
        cidade: 'Santa Rosa de Lima',
        ufId: 25,
      },
      {
        cidade: 'Santa Rosa de Viterbo',
        ufId: 26,
      },
      {
        cidade: 'Santa Rosa do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Santa Rosa do Purus',
        ufId: 1,
      },
      {
        cidade: 'Santa Rosa do Sul',
        ufId: 24,
      },
      {
        cidade: 'Santa Rosa do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Santa Salete',
        ufId: 26,
      },
      {
        cidade: 'Santa Teresa',
        ufId: 8,
      },
      {
        cidade: 'Santa Teresinha',
        ufId: 5,
      },
      {
        cidade: 'Santa Teresinha',
        ufId: 15,
      },
      {
        cidade: 'Santa Tereza',
        ufId: 23,
      },
      {
        cidade: 'Santa Tereza de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Santa Tereza do Oeste',
        ufId: 18,
      },
      {
        cidade: 'Santa Tereza do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Santa Terezinha',
        ufId: 24,
      },
      {
        cidade: 'Santa Terezinha',
        ufId: 13,
      },
      {
        cidade: 'Santa Terezinha',
        ufId: 16,
      },
      {
        cidade: 'Santa Terezinha de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Santa Terezinha de Itaipu',
        ufId: 18,
      },
      {
        cidade: 'Santa Terezinha do Progresso',
        ufId: 24,
      },
      {
        cidade: 'Santa Terezinha do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Santa Vitória',
        ufId: 11,
      },
      {
        cidade: 'Santa Vitória do Palmar',
        ufId: 23,
      },
      {
        cidade: 'Santaluz',
        ufId: 5,
      },
      {
        cidade: 'Santana',
        ufId: 5,
      },
      {
        cidade: 'Santana',
        ufId: 4,
      },
      {
        cidade: 'Santana da Boa Vista',
        ufId: 23,
      },
      {
        cidade: 'Santana da Ponte Pensa',
        ufId: 26,
      },
      {
        cidade: 'Santana da Vargem',
        ufId: 11,
      },
      {
        cidade: 'Santana de Cataguases',
        ufId: 11,
      },
      {
        cidade: 'Santana de Mangueira',
        ufId: 15,
      },
      {
        cidade: 'Santana de Parnaíba',
        ufId: 26,
      },
      {
        cidade: 'Santana de Pirapama',
        ufId: 11,
      },
      {
        cidade: 'Santana do Acaraú',
        ufId: 6,
      },
      {
        cidade: 'Santana do Araguaia',
        ufId: 14,
      },
      {
        cidade: 'Santana do Cariri',
        ufId: 6,
      },
      {
        cidade: 'Santana do Deserto',
        ufId: 11,
      },
      {
        cidade: 'Santana do Garambéu',
        ufId: 11,
      },
      {
        cidade: 'Santana do Ipanema',
        ufId: 2,
      },
      {
        cidade: 'Santana do Itararé',
        ufId: 18,
      },
      {
        cidade: 'Santana do Jacaré',
        ufId: 11,
      },
      {
        cidade: 'Santana do Manhuaçu',
        ufId: 11,
      },
      {
        cidade: 'Santana do Maranhão',
        ufId: 10,
      },
      {
        cidade: 'Santana do Matos',
        ufId: 20,
      },
      {
        cidade: 'Santana do Mundaú',
        ufId: 2,
      },
      {
        cidade: 'Santana do Paraíso',
        ufId: 11,
      },
      {
        cidade: 'Santana do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Santana do Riacho',
        ufId: 11,
      },
      {
        cidade: 'Santana do São Francisco',
        ufId: 25,
      },
      {
        cidade: 'Santana do Seridó',
        ufId: 20,
      },
      {
        cidade: 'Santana dos Garrotes',
        ufId: 15,
      },
      {
        cidade: 'Santana dos Montes',
        ufId: 11,
      },
      {
        cidade: 'Santanópolis',
        ufId: 5,
      },
      {
        cidade: 'Santarém',
        ufId: 14,
      },
      {
        cidade: 'Santarém Novo',
        ufId: 14,
      },
      {
        cidade: 'Santiago',
        ufId: 23,
      },
      {
        cidade: 'Santiago do Sul',
        ufId: 24,
      },
      {
        cidade: 'Santo Afonso',
        ufId: 13,
      },
      {
        cidade: 'Santo Amaro',
        ufId: 5,
      },
      {
        cidade: 'Santo Amaro da Imperatriz',
        ufId: 24,
      },
      {
        cidade: 'Santo Amaro das Brotas',
        ufId: 25,
      },
      {
        cidade: 'Santo Amaro do Maranhão',
        ufId: 10,
      },
      {
        cidade: 'Santo Anastácio',
        ufId: 26,
      },
      {
        cidade: 'Santo André',
        ufId: 26,
      },
      {
        cidade: 'Santo André',
        ufId: 15,
      },
      {
        cidade: 'Santo Ângelo',
        ufId: 23,
      },
      {
        cidade: 'Santo Antônio',
        ufId: 20,
      },
      {
        cidade: 'Santo Antônio da Alegria',
        ufId: 26,
      },
      {
        cidade: 'Santo Antônio da Barra',
        ufId: 9,
      },
      {
        cidade: 'Santo Antônio da Patrulha',
        ufId: 23,
      },
      {
        cidade: 'Santo Antônio da Platina',
        ufId: 18,
      },
      {
        cidade: 'Santo Antônio das Missões',
        ufId: 23,
      },
      {
        cidade: 'Santo Antônio de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Santo Antônio de Jesus',
        ufId: 5,
      },
      {
        cidade: 'Santo Antônio de Lisboa',
        ufId: 17,
      },
      {
        cidade: 'Santo Antônio de Pádua',
        ufId: 19,
      },
      {
        cidade: 'Santo Antônio de Posse',
        ufId: 26,
      },
      {
        cidade: 'Santo Antônio do Amparo',
        ufId: 11,
      },
      {
        cidade: 'Santo Antônio do Aracanguá',
        ufId: 26,
      },
      {
        cidade: 'Santo Antônio do Aventureiro',
        ufId: 11,
      },
      {
        cidade: 'Santo Antônio do Caiuá',
        ufId: 18,
      },
      {
        cidade: 'Santo Antônio do Descoberto',
        ufId: 9,
      },
      {
        cidade: 'Santo Antônio do Grama',
        ufId: 11,
      },
      {
        cidade: 'Santo Antônio do Içá',
        ufId: 3,
      },
      {
        cidade: 'Santo Antônio do Itambé',
        ufId: 11,
      },
      {
        cidade: 'Santo Antônio do Jacinto',
        ufId: 11,
      },
      {
        cidade: 'Santo Antônio do Jardim',
        ufId: 26,
      },
      {
        cidade: 'Santo Antônio do Leste',
        ufId: 13,
      },
      {
        cidade: 'Santo Antônio do Leverger',
        ufId: 13,
      },
      {
        cidade: 'Santo Antônio do Monte',
        ufId: 11,
      },
      {
        cidade: 'Santo Antônio do Palma',
        ufId: 23,
      },
      {
        cidade: 'Santo Antônio do Paraíso',
        ufId: 18,
      },
      {
        cidade: 'Santo Antônio do Pinhal',
        ufId: 26,
      },
      {
        cidade: 'Santo Antônio do Planalto',
        ufId: 23,
      },
      {
        cidade: 'Santo Antônio do Retiro',
        ufId: 11,
      },
      {
        cidade: 'Santo Antônio do Rio Abaixo',
        ufId: 11,
      },
      {
        cidade: 'Santo Antônio do Sudoeste',
        ufId: 18,
      },
      {
        cidade: 'Santo Antônio do Tauá',
        ufId: 14,
      },
      {
        cidade: 'Santo Antônio dos Lopes',
        ufId: 10,
      },
      {
        cidade: 'Santo Antônio dos Milagres',
        ufId: 17,
      },
      {
        cidade: 'Santo Augusto',
        ufId: 23,
      },
      {
        cidade: 'Santo Cristo',
        ufId: 23,
      },
      {
        cidade: 'Santo Estêvão',
        ufId: 5,
      },
      {
        cidade: 'Santo Expedito',
        ufId: 26,
      },
      {
        cidade: 'Santo Expedito do Sul',
        ufId: 23,
      },
      {
        cidade: 'Santo Hipólito',
        ufId: 11,
      },
      {
        cidade: 'Santo Inácio',
        ufId: 18,
      },
      {
        cidade: 'Santo Inácio do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Santópolis do Aguapeí',
        ufId: 26,
      },
      {
        cidade: 'Santos',
        ufId: 26,
      },
      {
        cidade: 'Santos Dumont',
        ufId: 11,
      },
      {
        cidade: 'São Benedito',
        ufId: 6,
      },
      {
        cidade: 'São Benedito do Rio Preto',
        ufId: 10,
      },
      {
        cidade: 'São Benedito do Sul',
        ufId: 16,
      },
      {
        cidade: 'São Bentinho',
        ufId: 15,
      },
      {
        cidade: 'São Bento',
        ufId: 15,
      },
      {
        cidade: 'São Bento',
        ufId: 10,
      },
      {
        cidade: 'São Bento Abade',
        ufId: 11,
      },
      {
        cidade: 'São Bento do Norte',
        ufId: 20,
      },
      {
        cidade: 'São Bento do Sapucaí',
        ufId: 26,
      },
      {
        cidade: 'São Bento do Sul',
        ufId: 24,
      },
      {
        cidade: 'São Bento do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'São Bento do Trairí',
        ufId: 20,
      },
      {
        cidade: 'São Bento do Una',
        ufId: 16,
      },
      {
        cidade: 'São Bernardino',
        ufId: 24,
      },
      {
        cidade: 'São Bernardo',
        ufId: 10,
      },
      {
        cidade: 'São Bernardo do Campo',
        ufId: 26,
      },
      {
        cidade: 'São Bonifácio',
        ufId: 24,
      },
      {
        cidade: 'São Borja',
        ufId: 23,
      },
      {
        cidade: 'São Brás',
        ufId: 2,
      },
      {
        cidade: 'São Brás do Suaçuí',
        ufId: 11,
      },
      {
        cidade: 'São Braz do Piauí',
        ufId: 17,
      },
      {
        cidade: 'São Caetano',
        ufId: 16,
      },
      {
        cidade: 'São Caetano de Odivelas',
        ufId: 14,
      },
      {
        cidade: 'São Caetano do Sul',
        ufId: 26,
      },
      {
        cidade: 'São Carlos',
        ufId: 26,
      },
      {
        cidade: 'São Carlos',
        ufId: 24,
      },
      {
        cidade: 'São Carlos do Ivaí',
        ufId: 18,
      },
      {
        cidade: 'São Cristóvão',
        ufId: 25,
      },
      {
        cidade: 'São Cristovão do Sul',
        ufId: 24,
      },
      {
        cidade: 'São Desidério',
        ufId: 5,
      },
      {
        cidade: 'São Domingos',
        ufId: 5,
      },
      {
        cidade: 'São Domingos',
        ufId: 24,
      },
      {
        cidade: 'São Domingos',
        ufId: 15,
      },
      {
        cidade: 'São Domingos',
        ufId: 25,
      },
      {
        cidade: 'São Domingos',
        ufId: 9,
      },
      {
        cidade: 'São Domingos das Dores',
        ufId: 11,
      },
      {
        cidade: 'São Domingos do Araguaia',
        ufId: 14,
      },
      {
        cidade: 'São Domingos do Azeitão',
        ufId: 10,
      },
      {
        cidade: 'São Domingos do Capim',
        ufId: 14,
      },
      {
        cidade: 'São Domingos do Cariri',
        ufId: 15,
      },
      {
        cidade: 'São Domingos do Maranhão',
        ufId: 10,
      },
      {
        cidade: 'São Domingos do Norte',
        ufId: 8,
      },
      {
        cidade: 'São Domingos do Prata',
        ufId: 11,
      },
      {
        cidade: 'São Domingos do Sul',
        ufId: 23,
      },
      {
        cidade: 'São Felipe',
        ufId: 5,
      },
      {
        cidade: "São Felipe D'Oeste",
        ufId: 21,
      },
      {
        cidade: 'São Félix',
        ufId: 5,
      },
      {
        cidade: 'São Félix de Balsas',
        ufId: 10,
      },
      {
        cidade: 'São Félix de Minas',
        ufId: 11,
      },
      {
        cidade: 'São Félix do Araguaia',
        ufId: 13,
      },
      {
        cidade: 'São Félix do Coribe',
        ufId: 5,
      },
      {
        cidade: 'São Félix do Piauí',
        ufId: 17,
      },
      {
        cidade: 'São Félix do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'São Félix do Xingu',
        ufId: 14,
      },
      {
        cidade: 'São Fernando',
        ufId: 20,
      },
      {
        cidade: 'São Fidélis',
        ufId: 19,
      },
      {
        cidade: 'São Francisco',
        ufId: 26,
      },
      {
        cidade: 'São Francisco',
        ufId: 15,
      },
      {
        cidade: 'São Francisco',
        ufId: 25,
      },
      {
        cidade: 'São Francisco',
        ufId: 11,
      },
      {
        cidade: 'São Francisco de Assis',
        ufId: 23,
      },
      {
        cidade: 'São Francisco de Assis do Piauí',
        ufId: 17,
      },
      {
        cidade: 'São Francisco de Goiás',
        ufId: 9,
      },
      {
        cidade: 'São Francisco de Itabapoana',
        ufId: 19,
      },
      {
        cidade: 'São Francisco de Paula',
        ufId: 23,
      },
      {
        cidade: 'São Francisco de Paula',
        ufId: 11,
      },
      {
        cidade: 'São Francisco de Sales',
        ufId: 11,
      },
      {
        cidade: 'São Francisco do Brejão',
        ufId: 10,
      },
      {
        cidade: 'São Francisco do Conde',
        ufId: 5,
      },
      {
        cidade: 'São Francisco do Glória',
        ufId: 11,
      },
      {
        cidade: 'São Francisco do Guaporé',
        ufId: 21,
      },
      {
        cidade: 'São Francisco do Maranhão',
        ufId: 10,
      },
      {
        cidade: 'São Francisco do Oeste',
        ufId: 20,
      },
      {
        cidade: 'São Francisco do Pará',
        ufId: 14,
      },
      {
        cidade: 'São Francisco do Piauí',
        ufId: 17,
      },
      {
        cidade: 'São Francisco do Sul',
        ufId: 24,
      },
      {
        cidade: 'São Gabriel',
        ufId: 23,
      },
      {
        cidade: 'São Gabriel',
        ufId: 5,
      },
      {
        cidade: 'São Gabriel da Cachoeira',
        ufId: 3,
      },
      {
        cidade: 'São Gabriel da Palha',
        ufId: 8,
      },
      {
        cidade: 'São Gabriel do Oeste',
        ufId: 12,
      },
      {
        cidade: 'São Geraldo',
        ufId: 11,
      },
      {
        cidade: 'São Geraldo da Piedade',
        ufId: 11,
      },
      {
        cidade: 'São Geraldo do Araguaia',
        ufId: 14,
      },
      {
        cidade: 'São Geraldo do Baixio',
        ufId: 11,
      },
      {
        cidade: 'São Gonçalo',
        ufId: 19,
      },
      {
        cidade: 'São Gonçalo do Abaeté',
        ufId: 11,
      },
      {
        cidade: 'São Gonçalo do Amarante',
        ufId: 20,
      },
      {
        cidade: 'São Gonçalo do Amarante',
        ufId: 6,
      },
      {
        cidade: 'São Gonçalo do Gurguéia',
        ufId: 17,
      },
      {
        cidade: 'São Gonçalo do Pará',
        ufId: 11,
      },
      {
        cidade: 'São Gonçalo do Piauí',
        ufId: 17,
      },
      {
        cidade: 'São Gonçalo do Rio Abaixo',
        ufId: 11,
      },
      {
        cidade: 'São Gonçalo do Rio Preto',
        ufId: 11,
      },
      {
        cidade: 'São Gonçalo do Sapucaí',
        ufId: 11,
      },
      {
        cidade: 'São Gonçalo dos Campos',
        ufId: 5,
      },
      {
        cidade: 'São Gotardo',
        ufId: 11,
      },
      {
        cidade: 'São Jerônimo',
        ufId: 23,
      },
      {
        cidade: 'São Jerônimo da Serra',
        ufId: 18,
      },
      {
        cidade: 'São João',
        ufId: 18,
      },
      {
        cidade: 'São João',
        ufId: 16,
      },
      {
        cidade: 'São João Batista',
        ufId: 10,
      },
      {
        cidade: 'São João Batista',
        ufId: 24,
      },
      {
        cidade: 'São João Batista do Glória',
        ufId: 11,
      },
      {
        cidade: "São João d'Aliança",
        ufId: 9,
      },
      {
        cidade: 'São João da Baliza',
        ufId: 22,
      },
      {
        cidade: 'São João da Barra',
        ufId: 19,
      },
      {
        cidade: 'São João da Boa Vista',
        ufId: 26,
      },
      {
        cidade: 'São João da Canabrava',
        ufId: 17,
      },
      {
        cidade: 'São João da Fronteira',
        ufId: 17,
      },
      {
        cidade: 'São João da Lagoa',
        ufId: 11,
      },
      {
        cidade: 'São João da Mata',
        ufId: 11,
      },
      {
        cidade: 'São João da Paraúna',
        ufId: 9,
      },
      {
        cidade: 'São João da Ponta',
        ufId: 14,
      },
      {
        cidade: 'São João da Ponte',
        ufId: 11,
      },
      {
        cidade: 'São João da Serra',
        ufId: 17,
      },
      {
        cidade: 'São João da Urtiga',
        ufId: 23,
      },
      {
        cidade: 'São João da Varjota',
        ufId: 17,
      },
      {
        cidade: 'São João das Duas Pontes',
        ufId: 26,
      },
      {
        cidade: 'São João das Missões',
        ufId: 11,
      },
      {
        cidade: 'São João de Iracema',
        ufId: 26,
      },
      {
        cidade: 'São João de Meriti',
        ufId: 19,
      },
      {
        cidade: 'São João de Pirabas',
        ufId: 14,
      },
      {
        cidade: 'São João del Rei',
        ufId: 11,
      },
      {
        cidade: 'São João do Araguaia',
        ufId: 14,
      },
      {
        cidade: 'São João do Arraial',
        ufId: 17,
      },
      {
        cidade: 'São João do Caiuá',
        ufId: 18,
      },
      {
        cidade: 'São João do Cariri',
        ufId: 15,
      },
      {
        cidade: 'São João do Carú',
        ufId: 10,
      },
      {
        cidade: 'São João do Itaperiú',
        ufId: 24,
      },
      {
        cidade: 'São João do Ivaí',
        ufId: 18,
      },
      {
        cidade: 'São João do Jaguaribe',
        ufId: 6,
      },
      {
        cidade: 'São João do Manhuaçu',
        ufId: 11,
      },
      {
        cidade: 'São João do Manteninha',
        ufId: 11,
      },
      {
        cidade: 'São João do Oeste',
        ufId: 24,
      },
      {
        cidade: 'São João do Oriente',
        ufId: 11,
      },
      {
        cidade: 'São João do Pacuí',
        ufId: 11,
      },
      {
        cidade: 'São João do Paraíso',
        ufId: 11,
      },
      {
        cidade: 'São João do Paraíso',
        ufId: 10,
      },
      {
        cidade: "São João do Pau d'Alho",
        ufId: 26,
      },
      {
        cidade: 'São João do Piauí',
        ufId: 17,
      },
      {
        cidade: 'São João do Polêsine',
        ufId: 23,
      },
      {
        cidade: 'São João do Rio do Peixe',
        ufId: 15,
      },
      {
        cidade: 'São João do Sabugi',
        ufId: 20,
      },
      {
        cidade: 'São João do Soter',
        ufId: 10,
      },
      {
        cidade: 'São João do Sul',
        ufId: 24,
      },
      {
        cidade: 'São João do Tigre',
        ufId: 15,
      },
      {
        cidade: 'São João do Triunfo',
        ufId: 18,
      },
      {
        cidade: 'São João dos Patos',
        ufId: 10,
      },
      {
        cidade: 'São João Evangelista',
        ufId: 11,
      },
      {
        cidade: 'São João Nepomuceno',
        ufId: 11,
      },
      {
        cidade: 'São Joaquim',
        ufId: 24,
      },
      {
        cidade: 'São Joaquim da Barra',
        ufId: 26,
      },
      {
        cidade: 'São Joaquim de Bicas',
        ufId: 11,
      },
      {
        cidade: 'São Joaquim do Monte',
        ufId: 16,
      },
      {
        cidade: 'São Jorge',
        ufId: 23,
      },
      {
        cidade: "São Jorge d'Oeste",
        ufId: 18,
      },
      {
        cidade: 'São Jorge do Ivaí',
        ufId: 18,
      },
      {
        cidade: 'São Jorge do Patrocínio',
        ufId: 18,
      },
      {
        cidade: 'São José',
        ufId: 24,
      },
      {
        cidade: 'São José da Barra',
        ufId: 11,
      },
      {
        cidade: 'São José da Bela Vista',
        ufId: 26,
      },
      {
        cidade: 'São José da Boa Vista',
        ufId: 18,
      },
      {
        cidade: 'São José da Coroa Grande',
        ufId: 16,
      },
      {
        cidade: 'São José da Lagoa Tapada',
        ufId: 15,
      },
      {
        cidade: 'São José da Laje',
        ufId: 2,
      },
      {
        cidade: 'São José da Lapa',
        ufId: 11,
      },
      {
        cidade: 'São José da Safira',
        ufId: 11,
      },
      {
        cidade: 'São José da Tapera',
        ufId: 2,
      },
      {
        cidade: 'São José da Varginha',
        ufId: 11,
      },
      {
        cidade: 'São José da Vitória',
        ufId: 5,
      },
      {
        cidade: 'São José das Missões',
        ufId: 23,
      },
      {
        cidade: 'São José das Palmeiras',
        ufId: 18,
      },
      {
        cidade: 'São José de Caiana',
        ufId: 15,
      },
      {
        cidade: 'São José de Espinharas',
        ufId: 15,
      },
      {
        cidade: 'São José de Mipibu',
        ufId: 20,
      },
      {
        cidade: 'São José de Piranhas',
        ufId: 15,
      },
      {
        cidade: 'São José de Princesa',
        ufId: 15,
      },
      {
        cidade: 'São José de Ribamar',
        ufId: 10,
      },
      {
        cidade: 'São José de Ubá',
        ufId: 19,
      },
      {
        cidade: 'São José do Alegre',
        ufId: 11,
      },
      {
        cidade: 'São José do Barreiro',
        ufId: 26,
      },
      {
        cidade: 'São José do Belmonte',
        ufId: 16,
      },
      {
        cidade: 'São José do Bonfim',
        ufId: 15,
      },
      {
        cidade: 'São José do Brejo do Cruz',
        ufId: 15,
      },
      {
        cidade: 'São José do Calçado',
        ufId: 8,
      },
      {
        cidade: 'São José do Campestre',
        ufId: 20,
      },
      {
        cidade: 'São José do Cedro',
        ufId: 24,
      },
      {
        cidade: 'São José do Cerrito',
        ufId: 24,
      },
      {
        cidade: 'São José do Divino',
        ufId: 17,
      },
      {
        cidade: 'São José do Divino',
        ufId: 11,
      },
      {
        cidade: 'São José do Egito',
        ufId: 16,
      },
      {
        cidade: 'São José do Goiabal',
        ufId: 11,
      },
      {
        cidade: 'São José do Herval',
        ufId: 23,
      },
      {
        cidade: 'São José do Hortêncio',
        ufId: 23,
      },
      {
        cidade: 'São José do Inhacorá',
        ufId: 23,
      },
      {
        cidade: 'São José do Jacuípe',
        ufId: 5,
      },
      {
        cidade: 'São José do Jacuri',
        ufId: 11,
      },
      {
        cidade: 'São José do Mantimento',
        ufId: 11,
      },
      {
        cidade: 'São José do Norte',
        ufId: 23,
      },
      {
        cidade: 'São José do Ouro',
        ufId: 23,
      },
      {
        cidade: 'São José do Peixe',
        ufId: 17,
      },
      {
        cidade: 'São José do Piauí',
        ufId: 17,
      },
      {
        cidade: 'São José do Povo',
        ufId: 13,
      },
      {
        cidade: 'São José do Rio Claro',
        ufId: 13,
      },
      {
        cidade: 'São José do Rio Pardo',
        ufId: 26,
      },
      {
        cidade: 'São José do Rio Preto',
        ufId: 26,
      },
      {
        cidade: 'São José do Sabugi',
        ufId: 15,
      },
      {
        cidade: 'São José do Seridó',
        ufId: 20,
      },
      {
        cidade: 'São José do Sul',
        ufId: 23,
      },
      {
        cidade: 'São José do Vale do Rio Preto',
        ufId: 19,
      },
      {
        cidade: 'São José do Xingu',
        ufId: 13,
      },
      {
        cidade: 'São José dos Ausentes',
        ufId: 23,
      },
      {
        cidade: 'São José dos Basílios',
        ufId: 10,
      },
      {
        cidade: 'São José dos Campos',
        ufId: 26,
      },
      {
        cidade: 'São José dos Cordeiros',
        ufId: 15,
      },
      {
        cidade: 'São José dos Pinhais',
        ufId: 18,
      },
      {
        cidade: 'São José dos Quatro Marcos',
        ufId: 13,
      },
      {
        cidade: 'São José dos Ramos',
        ufId: 15,
      },
      {
        cidade: 'São Julião',
        ufId: 17,
      },
      {
        cidade: 'São Leopoldo',
        ufId: 23,
      },
      {
        cidade: 'São Lourenço',
        ufId: 11,
      },
      {
        cidade: 'São Lourenço da Mata',
        ufId: 16,
      },
      {
        cidade: 'São Lourenço da Serra',
        ufId: 26,
      },
      {
        cidade: 'São Lourenço do Oeste',
        ufId: 24,
      },
      {
        cidade: 'São Lourenço do Piauí',
        ufId: 17,
      },
      {
        cidade: 'São Lourenço do Sul',
        ufId: 23,
      },
      {
        cidade: 'São Ludgero',
        ufId: 24,
      },
      {
        cidade: 'São Luís',
        ufId: 10,
      },
      {
        cidade: 'São Luís de Montes Belos',
        ufId: 9,
      },
      {
        cidade: 'São Luís do Curu',
        ufId: 6,
      },
      {
        cidade: 'São Luis do Piauí',
        ufId: 17,
      },
      {
        cidade: 'São Luís do Quitunde',
        ufId: 2,
      },
      {
        cidade: 'São Luís Gonzaga do Maranhão',
        ufId: 10,
      },
      {
        cidade: 'São Luiz',
        ufId: 22,
      },
      {
        cidade: 'São Luiz do Norte',
        ufId: 9,
      },
      {
        cidade: 'São Luiz do Paraitinga',
        ufId: 26,
      },
      {
        cidade: 'São Luiz Gonzaga',
        ufId: 23,
      },
      {
        cidade: 'São Mamede',
        ufId: 15,
      },
      {
        cidade: 'São Manoel do Paraná',
        ufId: 18,
      },
      {
        cidade: 'São Manuel',
        ufId: 26,
      },
      {
        cidade: 'São Marcos',
        ufId: 23,
      },
      {
        cidade: 'São Martinho',
        ufId: 24,
      },
      {
        cidade: 'São Martinho',
        ufId: 23,
      },
      {
        cidade: 'São Martinho da Serra',
        ufId: 23,
      },
      {
        cidade: 'São Mateus',
        ufId: 8,
      },
      {
        cidade: 'São Mateus do Maranhão',
        ufId: 10,
      },
      {
        cidade: 'São Mateus do Sul',
        ufId: 18,
      },
      {
        cidade: 'São Miguel',
        ufId: 20,
      },
      {
        cidade: 'São Miguel Arcanjo',
        ufId: 26,
      },
      {
        cidade: 'São Miguel da Baixa Grande',
        ufId: 17,
      },
      {
        cidade: 'São Miguel da Boa Vista',
        ufId: 24,
      },
      {
        cidade: 'São Miguel das Matas',
        ufId: 5,
      },
      {
        cidade: 'São Miguel das Missões',
        ufId: 23,
      },
      {
        cidade: 'São Miguel de Taipu',
        ufId: 15,
      },
      {
        cidade: 'São Miguel do Aleixo',
        ufId: 25,
      },
      {
        cidade: 'São Miguel do Anta',
        ufId: 11,
      },
      {
        cidade: 'São Miguel do Araguaia',
        ufId: 9,
      },
      {
        cidade: 'São Miguel do Fidalgo',
        ufId: 17,
      },
      {
        cidade: 'São Miguel do Gostoso',
        ufId: 20,
      },
      {
        cidade: 'São Miguel do Guamá',
        ufId: 14,
      },
      {
        cidade: 'São Miguel do Guaporé',
        ufId: 21,
      },
      {
        cidade: 'São Miguel do Iguaçu',
        ufId: 18,
      },
      {
        cidade: 'São Miguel do Oeste',
        ufId: 24,
      },
      {
        cidade: 'São Miguel do Passa Quatro',
        ufId: 9,
      },
      {
        cidade: 'São Miguel do Tapuio',
        ufId: 17,
      },
      {
        cidade: 'São Miguel do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'São Miguel dos Campos',
        ufId: 2,
      },
      {
        cidade: 'São Miguel dos Milagres',
        ufId: 2,
      },
      {
        cidade: 'São Nicolau',
        ufId: 23,
      },
      {
        cidade: 'São Patrício',
        ufId: 9,
      },
      {
        cidade: 'São Paulo',
        ufId: 26,
      },
      {
        cidade: 'São Paulo das Missões',
        ufId: 23,
      },
      {
        cidade: 'São Paulo de Olivença',
        ufId: 3,
      },
      {
        cidade: 'São Paulo do Potengi',
        ufId: 20,
      },
      {
        cidade: 'São Pedro',
        ufId: 20,
      },
      {
        cidade: 'São Pedro',
        ufId: 26,
      },
      {
        cidade: 'São Pedro da Água Branca',
        ufId: 10,
      },
      {
        cidade: 'São Pedro da Aldeia',
        ufId: 19,
      },
      {
        cidade: 'São Pedro da Cipa',
        ufId: 13,
      },
      {
        cidade: 'São Pedro da Serra',
        ufId: 23,
      },
      {
        cidade: 'São Pedro da União',
        ufId: 11,
      },
      {
        cidade: 'São Pedro das Missões',
        ufId: 23,
      },
      {
        cidade: 'São Pedro de Alcântara',
        ufId: 24,
      },
      {
        cidade: 'São Pedro do Butiá',
        ufId: 23,
      },
      {
        cidade: 'São Pedro do Iguaçu',
        ufId: 18,
      },
      {
        cidade: 'São Pedro do Ivaí',
        ufId: 18,
      },
      {
        cidade: 'São Pedro do Paraná',
        ufId: 18,
      },
      {
        cidade: 'São Pedro do Piauí',
        ufId: 17,
      },
      {
        cidade: 'São Pedro do Suaçuí',
        ufId: 11,
      },
      {
        cidade: 'São Pedro do Sul',
        ufId: 23,
      },
      {
        cidade: 'São Pedro do Turvo',
        ufId: 26,
      },
      {
        cidade: 'São Pedro dos Crentes',
        ufId: 10,
      },
      {
        cidade: 'São Pedro dos Ferros',
        ufId: 11,
      },
      {
        cidade: 'São Rafael',
        ufId: 20,
      },
      {
        cidade: 'São Raimundo das Mangabeiras',
        ufId: 10,
      },
      {
        cidade: 'São Raimundo do Doca Bezerra',
        ufId: 10,
      },
      {
        cidade: 'São Raimundo Nonato',
        ufId: 17,
      },
      {
        cidade: 'São Roberto',
        ufId: 10,
      },
      {
        cidade: 'São Romão',
        ufId: 11,
      },
      {
        cidade: 'São Roque',
        ufId: 26,
      },
      {
        cidade: 'São Roque de Minas',
        ufId: 11,
      },
      {
        cidade: 'São Roque do Canaã',
        ufId: 8,
      },
      {
        cidade: 'São Salvador do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'São Sebastião',
        ufId: 26,
      },
      {
        cidade: 'São Sebastião',
        ufId: 2,
      },
      {
        cidade: 'São Sebastião da Amoreira',
        ufId: 18,
      },
      {
        cidade: 'São Sebastião da Bela Vista',
        ufId: 11,
      },
      {
        cidade: 'São Sebastião da Boa Vista',
        ufId: 14,
      },
      {
        cidade: 'São Sebastião da Grama',
        ufId: 26,
      },
      {
        cidade: 'São Sebastião da Vargem Alegre',
        ufId: 11,
      },
      {
        cidade: 'São Sebastião de Lagoa de Roça',
        ufId: 15,
      },
      {
        cidade: 'São Sebastião do Alto',
        ufId: 19,
      },
      {
        cidade: 'São Sebastião do Anta',
        ufId: 11,
      },
      {
        cidade: 'São Sebastião do Caí',
        ufId: 23,
      },
      {
        cidade: 'São Sebastião do Maranhão',
        ufId: 11,
      },
      {
        cidade: 'São Sebastião do Oeste',
        ufId: 11,
      },
      {
        cidade: 'São Sebastião do Paraíso',
        ufId: 11,
      },
      {
        cidade: 'São Sebastião do Passé',
        ufId: 5,
      },
      {
        cidade: 'São Sebastião do Rio Preto',
        ufId: 11,
      },
      {
        cidade: 'São Sebastião do Rio Verde',
        ufId: 11,
      },
      {
        cidade: 'São Sebastião do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'São Sebastião do Uatumã',
        ufId: 3,
      },
      {
        cidade: 'São Sebastião do Umbuzeiro',
        ufId: 15,
      },
      {
        cidade: 'São Sepé',
        ufId: 23,
      },
      {
        cidade: 'São Simão',
        ufId: 26,
      },
      {
        cidade: 'São Simão',
        ufId: 9,
      },
      {
        cidade: 'São Thomé das Letras',
        ufId: 11,
      },
      {
        cidade: 'São Tiago',
        ufId: 11,
      },
      {
        cidade: 'São Tomás de Aquino',
        ufId: 11,
      },
      {
        cidade: 'São Tomé',
        ufId: 18,
      },
      {
        cidade: 'São Tomé',
        ufId: 20,
      },
      {
        cidade: 'São Valentim',
        ufId: 23,
      },
      {
        cidade: 'São Valentim do Sul',
        ufId: 23,
      },
      {
        cidade: 'São Valério',
        ufId: 27,
      },
      {
        cidade: 'São Valério do Sul',
        ufId: 23,
      },
      {
        cidade: 'São Vendelino',
        ufId: 23,
      },
      {
        cidade: 'São Vicente',
        ufId: 26,
      },
      {
        cidade: 'São Vicente',
        ufId: 20,
      },
      {
        cidade: 'São Vicente de Minas',
        ufId: 11,
      },
      {
        cidade: 'São Vicente do Seridó',
        ufId: 15,
      },
      {
        cidade: 'São Vicente do Sul',
        ufId: 23,
      },
      {
        cidade: 'São Vicente Ferrer',
        ufId: 16,
      },
      {
        cidade: 'São Vicente Ferrer',
        ufId: 10,
      },
      {
        cidade: 'Sapé',
        ufId: 15,
      },
      {
        cidade: 'Sapeaçu',
        ufId: 5,
      },
      {
        cidade: 'Sapezal',
        ufId: 13,
      },
      {
        cidade: 'Sapiranga',
        ufId: 23,
      },
      {
        cidade: 'Sapopema',
        ufId: 18,
      },
      {
        cidade: 'Sapucaí-Mirim',
        ufId: 11,
      },
      {
        cidade: 'Sapucaia',
        ufId: 14,
      },
      {
        cidade: 'Sapucaia',
        ufId: 19,
      },
      {
        cidade: 'Sapucaia do Sul',
        ufId: 23,
      },
      {
        cidade: 'Saquarema',
        ufId: 19,
      },
      {
        cidade: 'Sarandi',
        ufId: 18,
      },
      {
        cidade: 'Sarandi',
        ufId: 23,
      },
      {
        cidade: 'Sarapuí',
        ufId: 26,
      },
      {
        cidade: 'Sardoá',
        ufId: 11,
      },
      {
        cidade: 'Sarutaiá',
        ufId: 26,
      },
      {
        cidade: 'Sarzedo',
        ufId: 11,
      },
      {
        cidade: 'Sátiro Dias',
        ufId: 5,
      },
      {
        cidade: 'Satuba',
        ufId: 2,
      },
      {
        cidade: 'Satubinha',
        ufId: 10,
      },
      {
        cidade: 'Saubara',
        ufId: 5,
      },
      {
        cidade: 'Saudade do Iguaçu',
        ufId: 18,
      },
      {
        cidade: 'Saudades',
        ufId: 24,
      },
      {
        cidade: 'Saúde',
        ufId: 5,
      },
      {
        cidade: 'Schroeder',
        ufId: 24,
      },
      {
        cidade: 'Seabra',
        ufId: 5,
      },
      {
        cidade: 'Seara',
        ufId: 24,
      },
      {
        cidade: 'Sebastianópolis do Sul',
        ufId: 26,
      },
      {
        cidade: 'Sebastião Barros',
        ufId: 17,
      },
      {
        cidade: 'Sebastião Laranjeiras',
        ufId: 5,
      },
      {
        cidade: 'Sebastião Leal',
        ufId: 17,
      },
      {
        cidade: 'Seberi',
        ufId: 23,
      },
      {
        cidade: 'Sede Nova',
        ufId: 23,
      },
      {
        cidade: 'Segredo',
        ufId: 23,
      },
      {
        cidade: 'Selbach',
        ufId: 23,
      },
      {
        cidade: 'Selvíria',
        ufId: 12,
      },
      {
        cidade: 'Sem-Peixe',
        ufId: 11,
      },
      {
        cidade: 'Sena Madureira',
        ufId: 1,
      },
      {
        cidade: 'Senador Alexandre Costa',
        ufId: 10,
      },
      {
        cidade: 'Senador Amaral',
        ufId: 11,
      },
      {
        cidade: 'Senador Canedo',
        ufId: 9,
      },
      {
        cidade: 'Senador Cortes',
        ufId: 11,
      },
      {
        cidade: 'Senador Elói de Souza',
        ufId: 20,
      },
      {
        cidade: 'Senador Firmino',
        ufId: 11,
      },
      {
        cidade: 'Senador Georgino Avelino',
        ufId: 20,
      },
      {
        cidade: 'Senador Guiomard',
        ufId: 1,
      },
      {
        cidade: 'Senador José Bento',
        ufId: 11,
      },
      {
        cidade: 'Senador José Porfírio',
        ufId: 14,
      },
      {
        cidade: 'Senador La Rocque',
        ufId: 10,
      },
      {
        cidade: 'Senador Modestino Gonçalves',
        ufId: 11,
      },
      {
        cidade: 'Senador Pompeu',
        ufId: 6,
      },
      {
        cidade: 'Senador Rui Palmeira',
        ufId: 2,
      },
      {
        cidade: 'Senador Sá',
        ufId: 6,
      },
      {
        cidade: 'Senador Salgado Filho',
        ufId: 23,
      },
      {
        cidade: 'Sengés',
        ufId: 18,
      },
      {
        cidade: 'Senhor do Bonfim',
        ufId: 5,
      },
      {
        cidade: 'Senhora de Oliveira',
        ufId: 11,
      },
      {
        cidade: 'Senhora do Porto',
        ufId: 11,
      },
      {
        cidade: 'Senhora dos Remédios',
        ufId: 11,
      },
      {
        cidade: 'Sentinela do Sul',
        ufId: 23,
      },
      {
        cidade: 'Sento Sé',
        ufId: 5,
      },
      {
        cidade: 'Serafina Corrêa',
        ufId: 23,
      },
      {
        cidade: 'Sericita',
        ufId: 11,
      },
      {
        cidade: 'Seringueiras',
        ufId: 21,
      },
      {
        cidade: 'Sério',
        ufId: 23,
      },
      {
        cidade: 'Seritinga',
        ufId: 11,
      },
      {
        cidade: 'Seropédica',
        ufId: 19,
      },
      {
        cidade: 'Serra',
        ufId: 8,
      },
      {
        cidade: 'Serra Alta',
        ufId: 24,
      },
      {
        cidade: 'Serra Azul',
        ufId: 26,
      },
      {
        cidade: 'Serra Azul de Minas',
        ufId: 11,
      },
      {
        cidade: 'Serra Branca',
        ufId: 15,
      },
      {
        cidade: 'Serra Caiada',
        ufId: 20,
      },
      {
        cidade: 'Serra da Raiz',
        ufId: 15,
      },
      {
        cidade: 'Serra da Saudade',
        ufId: 11,
      },
      {
        cidade: 'Serra de São Bento',
        ufId: 20,
      },
      {
        cidade: 'Serra do Mel',
        ufId: 20,
      },
      {
        cidade: 'Serra do Navio',
        ufId: 4,
      },
      {
        cidade: 'Serra do Ramalho',
        ufId: 5,
      },
      {
        cidade: 'Serra do Salitre',
        ufId: 11,
      },
      {
        cidade: 'Serra dos Aimorés',
        ufId: 11,
      },
      {
        cidade: 'Serra Dourada',
        ufId: 5,
      },
      {
        cidade: 'Serra Grande',
        ufId: 15,
      },
      {
        cidade: 'Serra Negra',
        ufId: 26,
      },
      {
        cidade: 'Serra Negra do Norte',
        ufId: 20,
      },
      {
        cidade: 'Serra Nova Dourada',
        ufId: 13,
      },
      {
        cidade: 'Serra Preta',
        ufId: 5,
      },
      {
        cidade: 'Serra Redonda',
        ufId: 15,
      },
      {
        cidade: 'Serra Talhada',
        ufId: 16,
      },
      {
        cidade: 'Serrana',
        ufId: 26,
      },
      {
        cidade: 'Serrania',
        ufId: 11,
      },
      {
        cidade: 'Serrano do Maranhão',
        ufId: 10,
      },
      {
        cidade: 'Serranópolis',
        ufId: 9,
      },
      {
        cidade: 'Serranópolis de Minas',
        ufId: 11,
      },
      {
        cidade: 'Serranópolis do Iguaçu',
        ufId: 18,
      },
      {
        cidade: 'Serranos',
        ufId: 11,
      },
      {
        cidade: 'Serraria',
        ufId: 15,
      },
      {
        cidade: 'Serrinha',
        ufId: 20,
      },
      {
        cidade: 'Serrinha',
        ufId: 5,
      },
      {
        cidade: 'Serrinha dos Pintos',
        ufId: 20,
      },
      {
        cidade: 'Serrita',
        ufId: 16,
      },
      {
        cidade: 'Serro',
        ufId: 11,
      },
      {
        cidade: 'Serrolândia',
        ufId: 5,
      },
      {
        cidade: 'Sertaneja',
        ufId: 18,
      },
      {
        cidade: 'Sertânia',
        ufId: 16,
      },
      {
        cidade: 'Sertanópolis',
        ufId: 18,
      },
      {
        cidade: 'Sertão',
        ufId: 23,
      },
      {
        cidade: 'Sertão Santana',
        ufId: 23,
      },
      {
        cidade: 'Sertãozinho',
        ufId: 26,
      },
      {
        cidade: 'Sertãozinho',
        ufId: 15,
      },
      {
        cidade: 'Sete Barras',
        ufId: 26,
      },
      {
        cidade: 'Sete de Setembro',
        ufId: 23,
      },
      {
        cidade: 'Sete Lagoas',
        ufId: 11,
      },
      {
        cidade: 'Sete Quedas',
        ufId: 12,
      },
      {
        cidade: 'Setubinha',
        ufId: 11,
      },
      {
        cidade: 'Severiano de Almeida',
        ufId: 23,
      },
      {
        cidade: 'Severiano Melo',
        ufId: 20,
      },
      {
        cidade: 'Severínia',
        ufId: 26,
      },
      {
        cidade: 'Siderópolis',
        ufId: 24,
      },
      {
        cidade: 'Sidrolândia',
        ufId: 12,
      },
      {
        cidade: 'Sigefredo Pacheco',
        ufId: 17,
      },
      {
        cidade: 'Silva Jardim',
        ufId: 19,
      },
      {
        cidade: 'Silvânia',
        ufId: 9,
      },
      {
        cidade: 'Silvanópolis',
        ufId: 27,
      },
      {
        cidade: 'Silveira Martins',
        ufId: 23,
      },
      {
        cidade: 'Silveirânia',
        ufId: 11,
      },
      {
        cidade: 'Silveiras',
        ufId: 26,
      },
      {
        cidade: 'Silves',
        ufId: 3,
      },
      {
        cidade: 'Silvianópolis',
        ufId: 11,
      },
      {
        cidade: 'Simão Dias',
        ufId: 25,
      },
      {
        cidade: 'Simão Pereira',
        ufId: 11,
      },
      {
        cidade: 'Simões',
        ufId: 17,
      },
      {
        cidade: 'Simões Filho',
        ufId: 5,
      },
      {
        cidade: 'Simolândia',
        ufId: 9,
      },
      {
        cidade: 'Simonésia',
        ufId: 11,
      },
      {
        cidade: 'Simplício Mendes',
        ufId: 17,
      },
      {
        cidade: 'Sinimbu',
        ufId: 23,
      },
      {
        cidade: 'Sinop',
        ufId: 13,
      },
      {
        cidade: 'Siqueira Campos',
        ufId: 18,
      },
      {
        cidade: 'Sirinhaém',
        ufId: 16,
      },
      {
        cidade: 'Siriri',
        ufId: 25,
      },
      {
        cidade: "Sítio d'Abadia",
        ufId: 9,
      },
      {
        cidade: 'Sítio do Mato',
        ufId: 5,
      },
      {
        cidade: 'Sítio do Quinto',
        ufId: 5,
      },
      {
        cidade: 'Sítio Novo',
        ufId: 10,
      },
      {
        cidade: 'Sítio Novo',
        ufId: 20,
      },
      {
        cidade: 'Sítio Novo do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Sobradinho',
        ufId: 5,
      },
      {
        cidade: 'Sobradinho',
        ufId: 23,
      },
      {
        cidade: 'Sobrado',
        ufId: 15,
      },
      {
        cidade: 'Sobral',
        ufId: 6,
      },
      {
        cidade: 'Sobrália',
        ufId: 11,
      },
      {
        cidade: 'Socorro',
        ufId: 26,
      },
      {
        cidade: 'Socorro do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Solânea',
        ufId: 15,
      },
      {
        cidade: 'Soledade',
        ufId: 15,
      },
      {
        cidade: 'Soledade',
        ufId: 23,
      },
      {
        cidade: 'Soledade de Minas',
        ufId: 11,
      },
      {
        cidade: 'Solidão',
        ufId: 16,
      },
      {
        cidade: 'Solonópole',
        ufId: 6,
      },
      {
        cidade: 'Sombrio',
        ufId: 24,
      },
      {
        cidade: 'Sonora',
        ufId: 12,
      },
      {
        cidade: 'Sooretama',
        ufId: 8,
      },
      {
        cidade: 'Sorocaba',
        ufId: 26,
      },
      {
        cidade: 'Sorriso',
        ufId: 13,
      },
      {
        cidade: 'Sossêgo',
        ufId: 15,
      },
      {
        cidade: 'Soure',
        ufId: 14,
      },
      {
        cidade: 'Sousa',
        ufId: 15,
      },
      {
        cidade: 'Souto Soares',
        ufId: 5,
      },
      {
        cidade: 'Sucupira',
        ufId: 27,
      },
      {
        cidade: 'Sucupira do Norte',
        ufId: 10,
      },
      {
        cidade: 'Sucupira do Riachão',
        ufId: 10,
      },
      {
        cidade: 'Sud Mennucci',
        ufId: 26,
      },
      {
        cidade: 'Sul Brasil',
        ufId: 24,
      },
      {
        cidade: 'Sulina',
        ufId: 18,
      },
      {
        cidade: 'Sumaré',
        ufId: 26,
      },
      {
        cidade: 'Sumé',
        ufId: 15,
      },
      {
        cidade: 'Sumidouro',
        ufId: 19,
      },
      {
        cidade: 'Surubim',
        ufId: 16,
      },
      {
        cidade: 'Sussuapara',
        ufId: 17,
      },
      {
        cidade: 'Suzanápolis',
        ufId: 26,
      },
      {
        cidade: 'Suzano',
        ufId: 26,
      },
      {
        cidade: 'Tabaí',
        ufId: 23,
      },
      {
        cidade: 'Tabaporã',
        ufId: 13,
      },
      {
        cidade: 'Tabapuã',
        ufId: 26,
      },
      {
        cidade: 'Tabatinga',
        ufId: 26,
      },
      {
        cidade: 'Tabatinga',
        ufId: 3,
      },
      {
        cidade: 'Tabira',
        ufId: 16,
      },
      {
        cidade: 'Taboão da Serra',
        ufId: 26,
      },
      {
        cidade: 'Tabocas do Brejo Velho',
        ufId: 5,
      },
      {
        cidade: 'Taboleiro Grande',
        ufId: 20,
      },
      {
        cidade: 'Tabuleiro',
        ufId: 11,
      },
      {
        cidade: 'Tabuleiro do Norte',
        ufId: 6,
      },
      {
        cidade: 'Tacaimbó',
        ufId: 16,
      },
      {
        cidade: 'Tacaratu',
        ufId: 16,
      },
      {
        cidade: 'Taciba',
        ufId: 26,
      },
      {
        cidade: 'Tacima',
        ufId: 15,
      },
      {
        cidade: 'Tacuru',
        ufId: 12,
      },
      {
        cidade: 'Taguaí',
        ufId: 26,
      },
      {
        cidade: 'Taguatinga',
        ufId: 27,
      },
      {
        cidade: 'Taiaçu',
        ufId: 26,
      },
      {
        cidade: 'Tailândia',
        ufId: 14,
      },
      {
        cidade: 'Taió',
        ufId: 24,
      },
      {
        cidade: 'Taiobeiras',
        ufId: 11,
      },
      {
        cidade: 'Taipas do Tocantins',
        ufId: 27,
      },
      {
        cidade: 'Taipu',
        ufId: 20,
      },
      {
        cidade: 'Taiúva',
        ufId: 26,
      },
      {
        cidade: 'Talismã',
        ufId: 27,
      },
      {
        cidade: 'Tamandaré',
        ufId: 16,
      },
      {
        cidade: 'Tamarana',
        ufId: 18,
      },
      {
        cidade: 'Tambaú',
        ufId: 26,
      },
      {
        cidade: 'Tamboara',
        ufId: 18,
      },
      {
        cidade: 'Tamboril',
        ufId: 6,
      },
      {
        cidade: 'Tamboril do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Tanabi',
        ufId: 26,
      },
      {
        cidade: 'Tangará',
        ufId: 20,
      },
      {
        cidade: 'Tangará',
        ufId: 24,
      },
      {
        cidade: 'Tangará da Serra',
        ufId: 13,
      },
      {
        cidade: 'Tanguá',
        ufId: 19,
      },
      {
        cidade: 'Tanhaçu',
        ufId: 5,
      },
      {
        cidade: "Tanque d'Arca",
        ufId: 2,
      },
      {
        cidade: 'Tanque do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Tanque Novo',
        ufId: 5,
      },
      {
        cidade: 'Tanquinho',
        ufId: 5,
      },
      {
        cidade: 'Taparuba',
        ufId: 11,
      },
      {
        cidade: 'Tapauá',
        ufId: 3,
      },
      {
        cidade: 'Tapejara',
        ufId: 18,
      },
      {
        cidade: 'Tapejara',
        ufId: 23,
      },
      {
        cidade: 'Tapera',
        ufId: 23,
      },
      {
        cidade: 'Taperoá',
        ufId: 5,
      },
      {
        cidade: 'Taperoá',
        ufId: 15,
      },
      {
        cidade: 'Tapes',
        ufId: 23,
      },
      {
        cidade: 'Tapira',
        ufId: 18,
      },
      {
        cidade: 'Tapira',
        ufId: 11,
      },
      {
        cidade: 'Tapiraí',
        ufId: 11,
      },
      {
        cidade: 'Tapiraí',
        ufId: 26,
      },
      {
        cidade: 'Tapiramutá',
        ufId: 5,
      },
      {
        cidade: 'Tapiratiba',
        ufId: 26,
      },
      {
        cidade: 'Tapurah',
        ufId: 13,
      },
      {
        cidade: 'Taquara',
        ufId: 23,
      },
      {
        cidade: 'Taquaraçu de Minas',
        ufId: 11,
      },
      {
        cidade: 'Taquaral',
        ufId: 26,
      },
      {
        cidade: 'Taquaral de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Taquarana',
        ufId: 2,
      },
      {
        cidade: 'Taquari',
        ufId: 23,
      },
      {
        cidade: 'Taquaritinga',
        ufId: 26,
      },
      {
        cidade: 'Taquaritinga do Norte',
        ufId: 16,
      },
      {
        cidade: 'Taquarituba',
        ufId: 26,
      },
      {
        cidade: 'Taquarivaí',
        ufId: 26,
      },
      {
        cidade: 'Taquaruçu do Sul',
        ufId: 23,
      },
      {
        cidade: 'Taquarussu',
        ufId: 12,
      },
      {
        cidade: 'Tarabai',
        ufId: 26,
      },
      {
        cidade: 'Tarauacá',
        ufId: 1,
      },
      {
        cidade: 'Tarrafas',
        ufId: 6,
      },
      {
        cidade: 'Tartarugalzinho',
        ufId: 4,
      },
      {
        cidade: 'Tarumã',
        ufId: 26,
      },
      {
        cidade: 'Tarumirim',
        ufId: 11,
      },
      {
        cidade: 'Tasso Fragoso',
        ufId: 10,
      },
      {
        cidade: 'Tatuí',
        ufId: 26,
      },
      {
        cidade: 'Tauá',
        ufId: 6,
      },
      {
        cidade: 'Taubaté',
        ufId: 26,
      },
      {
        cidade: 'Tavares',
        ufId: 23,
      },
      {
        cidade: 'Tavares',
        ufId: 15,
      },
      {
        cidade: 'Tefé',
        ufId: 3,
      },
      {
        cidade: 'Teixeira',
        ufId: 15,
      },
      {
        cidade: 'Teixeira de Freitas',
        ufId: 5,
      },
      {
        cidade: 'Teixeira Soares',
        ufId: 18,
      },
      {
        cidade: 'Teixeiras',
        ufId: 11,
      },
      {
        cidade: 'Teixeirópolis',
        ufId: 21,
      },
      {
        cidade: 'Tejuçuoca',
        ufId: 6,
      },
      {
        cidade: 'Tejupá',
        ufId: 26,
      },
      {
        cidade: 'Telêmaco Borba',
        ufId: 18,
      },
      {
        cidade: 'Telha',
        ufId: 25,
      },
      {
        cidade: 'Tenente Ananias',
        ufId: 20,
      },
      {
        cidade: 'Tenente Laurentino Cruz',
        ufId: 20,
      },
      {
        cidade: 'Tenente Portela',
        ufId: 23,
      },
      {
        cidade: 'Tenório',
        ufId: 15,
      },
      {
        cidade: 'Teodoro Sampaio',
        ufId: 5,
      },
      {
        cidade: 'Teodoro Sampaio',
        ufId: 26,
      },
      {
        cidade: 'Teofilândia',
        ufId: 5,
      },
      {
        cidade: 'Teófilo Otoni',
        ufId: 11,
      },
      {
        cidade: 'Teolândia',
        ufId: 5,
      },
      {
        cidade: 'Teotônio Vilela',
        ufId: 2,
      },
      {
        cidade: 'Terenos',
        ufId: 12,
      },
      {
        cidade: 'Teresina',
        ufId: 17,
      },
      {
        cidade: 'Teresina de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Teresópolis',
        ufId: 19,
      },
      {
        cidade: 'Terezinha',
        ufId: 16,
      },
      {
        cidade: 'Terezópolis de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Terra Alta',
        ufId: 14,
      },
      {
        cidade: 'Terra Boa',
        ufId: 18,
      },
      {
        cidade: 'Terra de Areia',
        ufId: 23,
      },
      {
        cidade: 'Terra Nova',
        ufId: 5,
      },
      {
        cidade: 'Terra Nova',
        ufId: 16,
      },
      {
        cidade: 'Terra Nova do Norte',
        ufId: 13,
      },
      {
        cidade: 'Terra Rica',
        ufId: 18,
      },
      {
        cidade: 'Terra Roxa',
        ufId: 18,
      },
      {
        cidade: 'Terra Roxa',
        ufId: 26,
      },
      {
        cidade: 'Terra Santa',
        ufId: 14,
      },
      {
        cidade: 'Tesouro',
        ufId: 13,
      },
      {
        cidade: 'Teutônia',
        ufId: 23,
      },
      {
        cidade: 'Theobroma',
        ufId: 21,
      },
      {
        cidade: 'Tianguá',
        ufId: 6,
      },
      {
        cidade: 'Tibagi',
        ufId: 18,
      },
      {
        cidade: 'Tibau',
        ufId: 20,
      },
      {
        cidade: 'Tibau do Sul',
        ufId: 20,
      },
      {
        cidade: 'Tietê',
        ufId: 26,
      },
      {
        cidade: 'Tigrinhos',
        ufId: 24,
      },
      {
        cidade: 'Tijucas',
        ufId: 24,
      },
      {
        cidade: 'Tijucas do Sul',
        ufId: 18,
      },
      {
        cidade: 'Timbaúba',
        ufId: 16,
      },
      {
        cidade: 'Timbaúba dos Batistas',
        ufId: 20,
      },
      {
        cidade: 'Timbé do Sul',
        ufId: 24,
      },
      {
        cidade: 'Timbiras',
        ufId: 10,
      },
      {
        cidade: 'Timbó',
        ufId: 24,
      },
      {
        cidade: 'Timbó Grande',
        ufId: 24,
      },
      {
        cidade: 'Timburi',
        ufId: 26,
      },
      {
        cidade: 'Timon',
        ufId: 10,
      },
      {
        cidade: 'Timóteo',
        ufId: 11,
      },
      {
        cidade: 'Tio Hugo',
        ufId: 23,
      },
      {
        cidade: 'Tiradentes',
        ufId: 11,
      },
      {
        cidade: 'Tiradentes do Sul',
        ufId: 23,
      },
      {
        cidade: 'Tiros',
        ufId: 11,
      },
      {
        cidade: 'Tobias Barreto',
        ufId: 25,
      },
      {
        cidade: 'Tocantínia',
        ufId: 27,
      },
      {
        cidade: 'Tocantinópolis',
        ufId: 27,
      },
      {
        cidade: 'Tocantins',
        ufId: 11,
      },
      {
        cidade: 'Tocos do Moji',
        ufId: 11,
      },
      {
        cidade: 'Toledo',
        ufId: 11,
      },
      {
        cidade: 'Toledo',
        ufId: 18,
      },
      {
        cidade: 'Tomar do Geru',
        ufId: 25,
      },
      {
        cidade: 'Tomazina',
        ufId: 18,
      },
      {
        cidade: 'Tombos',
        ufId: 11,
      },
      {
        cidade: 'Tomé-Açu',
        ufId: 14,
      },
      {
        cidade: 'Tonantins',
        ufId: 3,
      },
      {
        cidade: 'Toritama',
        ufId: 16,
      },
      {
        cidade: 'Torixoréu',
        ufId: 13,
      },
      {
        cidade: 'Toropi',
        ufId: 23,
      },
      {
        cidade: 'Torre de Pedra',
        ufId: 26,
      },
      {
        cidade: 'Torres',
        ufId: 23,
      },
      {
        cidade: 'Torrinha',
        ufId: 26,
      },
      {
        cidade: 'Touros',
        ufId: 20,
      },
      {
        cidade: 'Trabiju',
        ufId: 26,
      },
      {
        cidade: 'Tracuateua',
        ufId: 14,
      },
      {
        cidade: 'Tracunhaém',
        ufId: 16,
      },
      {
        cidade: 'Traipu',
        ufId: 2,
      },
      {
        cidade: 'Trairão',
        ufId: 14,
      },
      {
        cidade: 'Trairi',
        ufId: 6,
      },
      {
        cidade: 'Trajano de Moraes',
        ufId: 19,
      },
      {
        cidade: 'Tramandaí',
        ufId: 23,
      },
      {
        cidade: 'Travesseiro',
        ufId: 23,
      },
      {
        cidade: 'Tremedal',
        ufId: 5,
      },
      {
        cidade: 'Tremembé',
        ufId: 26,
      },
      {
        cidade: 'Três Arroios',
        ufId: 23,
      },
      {
        cidade: 'Três Barras',
        ufId: 24,
      },
      {
        cidade: 'Três Barras do Paraná',
        ufId: 18,
      },
      {
        cidade: 'Três Cachoeiras',
        ufId: 23,
      },
      {
        cidade: 'Três Corações',
        ufId: 11,
      },
      {
        cidade: 'Três Coroas',
        ufId: 23,
      },
      {
        cidade: 'Três de Maio',
        ufId: 23,
      },
      {
        cidade: 'Três Forquilhas',
        ufId: 23,
      },
      {
        cidade: 'Três Fronteiras',
        ufId: 26,
      },
      {
        cidade: 'Três Lagoas',
        ufId: 12,
      },
      {
        cidade: 'Três Marias',
        ufId: 11,
      },
      {
        cidade: 'Três Palmeiras',
        ufId: 23,
      },
      {
        cidade: 'Três Passos',
        ufId: 23,
      },
      {
        cidade: 'Três Pontas',
        ufId: 11,
      },
      {
        cidade: 'Três Ranchos',
        ufId: 9,
      },
      {
        cidade: 'Três Rios',
        ufId: 19,
      },
      {
        cidade: 'Treviso',
        ufId: 24,
      },
      {
        cidade: 'Treze de Maio',
        ufId: 24,
      },
      {
        cidade: 'Treze Tílias',
        ufId: 24,
      },
      {
        cidade: 'Trindade',
        ufId: 9,
      },
      {
        cidade: 'Trindade',
        ufId: 16,
      },
      {
        cidade: 'Trindade do Sul',
        ufId: 23,
      },
      {
        cidade: 'Triunfo',
        ufId: 23,
      },
      {
        cidade: 'Triunfo',
        ufId: 15,
      },
      {
        cidade: 'Triunfo',
        ufId: 16,
      },
      {
        cidade: 'Triunfo Potiguar',
        ufId: 20,
      },
      {
        cidade: 'Trizidela do Vale',
        ufId: 10,
      },
      {
        cidade: 'Trombas',
        ufId: 9,
      },
      {
        cidade: 'Trombudo Central',
        ufId: 24,
      },
      {
        cidade: 'Tubarão',
        ufId: 24,
      },
      {
        cidade: 'Tucano',
        ufId: 5,
      },
      {
        cidade: 'Tucumã',
        ufId: 14,
      },
      {
        cidade: 'Tucunduva',
        ufId: 23,
      },
      {
        cidade: 'Tucuruí',
        ufId: 14,
      },
      {
        cidade: 'Tufilândia',
        ufId: 10,
      },
      {
        cidade: 'Tuiuti',
        ufId: 26,
      },
      {
        cidade: 'Tumiritinga',
        ufId: 11,
      },
      {
        cidade: 'Tunápolis',
        ufId: 24,
      },
      {
        cidade: 'Tunas',
        ufId: 23,
      },
      {
        cidade: 'Tunas do Paraná',
        ufId: 18,
      },
      {
        cidade: 'Tuneiras do Oeste',
        ufId: 18,
      },
      {
        cidade: 'Tuntum',
        ufId: 10,
      },
      {
        cidade: 'Tupã',
        ufId: 26,
      },
      {
        cidade: 'Tupaciguara',
        ufId: 11,
      },
      {
        cidade: 'Tupanatinga',
        ufId: 16,
      },
      {
        cidade: 'Tupanci do Sul',
        ufId: 23,
      },
      {
        cidade: 'Tupanciretã',
        ufId: 23,
      },
      {
        cidade: 'Tupandi',
        ufId: 23,
      },
      {
        cidade: 'Tuparendi',
        ufId: 23,
      },
      {
        cidade: 'Tuparetama',
        ufId: 16,
      },
      {
        cidade: 'Tupãssi',
        ufId: 18,
      },
      {
        cidade: 'Tupi Paulista',
        ufId: 26,
      },
      {
        cidade: 'Tupirama',
        ufId: 27,
      },
      {
        cidade: 'Tupiratins',
        ufId: 27,
      },
      {
        cidade: 'Turiaçu',
        ufId: 10,
      },
      {
        cidade: 'Turilândia',
        ufId: 10,
      },
      {
        cidade: 'Turiúba',
        ufId: 26,
      },
      {
        cidade: 'Turmalina',
        ufId: 26,
      },
      {
        cidade: 'Turmalina',
        ufId: 11,
      },
      {
        cidade: 'Turuçu',
        ufId: 23,
      },
      {
        cidade: 'Tururu',
        ufId: 6,
      },
      {
        cidade: 'Turvânia',
        ufId: 9,
      },
      {
        cidade: 'Turvelândia',
        ufId: 9,
      },
      {
        cidade: 'Turvo',
        ufId: 18,
      },
      {
        cidade: 'Turvo',
        ufId: 24,
      },
      {
        cidade: 'Turvolândia',
        ufId: 11,
      },
      {
        cidade: 'Tutóia',
        ufId: 10,
      },
      {
        cidade: 'Uarini',
        ufId: 3,
      },
      {
        cidade: 'Uauá',
        ufId: 5,
      },
      {
        cidade: 'Ubá',
        ufId: 11,
      },
      {
        cidade: 'Ubaí',
        ufId: 11,
      },
      {
        cidade: 'Ubaíra',
        ufId: 5,
      },
      {
        cidade: 'Ubaitaba',
        ufId: 5,
      },
      {
        cidade: 'Ubajara',
        ufId: 6,
      },
      {
        cidade: 'Ubaporanga',
        ufId: 11,
      },
      {
        cidade: 'Ubarana',
        ufId: 26,
      },
      {
        cidade: 'Ubatã',
        ufId: 5,
      },
      {
        cidade: 'Ubatuba',
        ufId: 26,
      },
      {
        cidade: 'Uberaba',
        ufId: 11,
      },
      {
        cidade: 'Uberlândia',
        ufId: 11,
      },
      {
        cidade: 'Ubirajara',
        ufId: 26,
      },
      {
        cidade: 'Ubiratã',
        ufId: 18,
      },
      {
        cidade: 'Ubiretama',
        ufId: 23,
      },
      {
        cidade: 'Uchoa',
        ufId: 26,
      },
      {
        cidade: 'Uibaí',
        ufId: 5,
      },
      {
        cidade: 'Uiramutã',
        ufId: 22,
      },
      {
        cidade: 'Uirapuru',
        ufId: 9,
      },
      {
        cidade: 'Uiraúna',
        ufId: 15,
      },
      {
        cidade: 'Ulianópolis',
        ufId: 14,
      },
      {
        cidade: 'Umari',
        ufId: 6,
      },
      {
        cidade: 'Umarizal',
        ufId: 20,
      },
      {
        cidade: 'Umbaúba',
        ufId: 25,
      },
      {
        cidade: 'Umburanas',
        ufId: 5,
      },
      {
        cidade: 'Umburatiba',
        ufId: 11,
      },
      {
        cidade: 'Umbuzeiro',
        ufId: 15,
      },
      {
        cidade: 'Umirim',
        ufId: 6,
      },
      {
        cidade: 'Umuarama',
        ufId: 18,
      },
      {
        cidade: 'Una',
        ufId: 5,
      },
      {
        cidade: 'Unaí',
        ufId: 11,
      },
      {
        cidade: 'União',
        ufId: 17,
      },
      {
        cidade: 'União da Serra',
        ufId: 23,
      },
      {
        cidade: 'União da Vitória',
        ufId: 18,
      },
      {
        cidade: 'União de Minas',
        ufId: 11,
      },
      {
        cidade: 'União do Oeste',
        ufId: 24,
      },
      {
        cidade: 'União do Sul',
        ufId: 13,
      },
      {
        cidade: 'União dos Palmares',
        ufId: 2,
      },
      {
        cidade: 'União Paulista',
        ufId: 26,
      },
      {
        cidade: 'Uniflor',
        ufId: 18,
      },
      {
        cidade: 'Unistalda',
        ufId: 23,
      },
      {
        cidade: 'Upanema',
        ufId: 20,
      },
      {
        cidade: 'Uraí',
        ufId: 18,
      },
      {
        cidade: 'Urandi',
        ufId: 5,
      },
      {
        cidade: 'Urânia',
        ufId: 26,
      },
      {
        cidade: 'Urbano Santos',
        ufId: 10,
      },
      {
        cidade: 'Uru',
        ufId: 26,
      },
      {
        cidade: 'Uruaçu',
        ufId: 9,
      },
      {
        cidade: 'Uruana',
        ufId: 9,
      },
      {
        cidade: 'Uruana de Minas',
        ufId: 11,
      },
      {
        cidade: 'Uruará',
        ufId: 14,
      },
      {
        cidade: 'Urubici',
        ufId: 24,
      },
      {
        cidade: 'Uruburetama',
        ufId: 6,
      },
      {
        cidade: 'Urucânia',
        ufId: 11,
      },
      {
        cidade: 'Urucará',
        ufId: 3,
      },
      {
        cidade: 'Uruçuca',
        ufId: 5,
      },
      {
        cidade: 'Uruçuí',
        ufId: 17,
      },
      {
        cidade: 'Urucuia',
        ufId: 11,
      },
      {
        cidade: 'Urucurituba',
        ufId: 3,
      },
      {
        cidade: 'Uruguaiana',
        ufId: 23,
      },
      {
        cidade: 'Uruoca',
        ufId: 6,
      },
      {
        cidade: 'Urupá',
        ufId: 21,
      },
      {
        cidade: 'Urupema',
        ufId: 24,
      },
      {
        cidade: 'Urupês',
        ufId: 26,
      },
      {
        cidade: 'Urussanga',
        ufId: 24,
      },
      {
        cidade: 'Urutaí',
        ufId: 9,
      },
      {
        cidade: 'Utinga',
        ufId: 5,
      },
      {
        cidade: 'Vacaria',
        ufId: 23,
      },
      {
        cidade: 'Vale de São Domingos',
        ufId: 13,
      },
      {
        cidade: 'Vale do Anari',
        ufId: 21,
      },
      {
        cidade: 'Vale do Paraíso',
        ufId: 21,
      },
      {
        cidade: 'Vale do Sol',
        ufId: 23,
      },
      {
        cidade: 'Vale Real',
        ufId: 23,
      },
      {
        cidade: 'Vale Verde',
        ufId: 23,
      },
      {
        cidade: 'Valença',
        ufId: 5,
      },
      {
        cidade: 'Valença',
        ufId: 19,
      },
      {
        cidade: 'Valença do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Valente',
        ufId: 5,
      },
      {
        cidade: 'Valentim Gentil',
        ufId: 26,
      },
      {
        cidade: 'Valinhos',
        ufId: 26,
      },
      {
        cidade: 'Valparaíso',
        ufId: 26,
      },
      {
        cidade: 'Valparaíso de Goiás',
        ufId: 9,
      },
      {
        cidade: 'Vanini',
        ufId: 23,
      },
      {
        cidade: 'Vargeão',
        ufId: 24,
      },
      {
        cidade: 'Vargem',
        ufId: 24,
      },
      {
        cidade: 'Vargem',
        ufId: 26,
      },
      {
        cidade: 'Vargem Alegre',
        ufId: 11,
      },
      {
        cidade: 'Vargem Alta',
        ufId: 8,
      },
      {
        cidade: 'Vargem Bonita',
        ufId: 11,
      },
      {
        cidade: 'Vargem Bonita',
        ufId: 24,
      },
      {
        cidade: 'Vargem Grande',
        ufId: 10,
      },
      {
        cidade: 'Vargem Grande do Rio Pardo',
        ufId: 11,
      },
      {
        cidade: 'Vargem Grande do Sul',
        ufId: 26,
      },
      {
        cidade: 'Vargem Grande Paulista',
        ufId: 26,
      },
      {
        cidade: 'Varginha',
        ufId: 11,
      },
      {
        cidade: 'Varjão',
        ufId: 9,
      },
      {
        cidade: 'Varjão de Minas',
        ufId: 11,
      },
      {
        cidade: 'Varjota',
        ufId: 6,
      },
      {
        cidade: 'Varre-Sai',
        ufId: 19,
      },
      {
        cidade: 'Várzea',
        ufId: 20,
      },
      {
        cidade: 'Várzea',
        ufId: 15,
      },
      {
        cidade: 'Várzea Alegre',
        ufId: 6,
      },
      {
        cidade: 'Várzea Branca',
        ufId: 17,
      },
      {
        cidade: 'Várzea da Palma',
        ufId: 11,
      },
      {
        cidade: 'Várzea da Roça',
        ufId: 5,
      },
      {
        cidade: 'Várzea do Poço',
        ufId: 5,
      },
      {
        cidade: 'Várzea Grande',
        ufId: 17,
      },
      {
        cidade: 'Várzea Grande',
        ufId: 13,
      },
      {
        cidade: 'Várzea Nova',
        ufId: 5,
      },
      {
        cidade: 'Várzea Paulista',
        ufId: 26,
      },
      {
        cidade: 'Varzedo',
        ufId: 5,
      },
      {
        cidade: 'Varzelândia',
        ufId: 11,
      },
      {
        cidade: 'Vassouras',
        ufId: 19,
      },
      {
        cidade: 'Vazante',
        ufId: 11,
      },
      {
        cidade: 'Venâncio Aires',
        ufId: 23,
      },
      {
        cidade: 'Venda Nova do Imigrante',
        ufId: 8,
      },
      {
        cidade: 'Venha-Ver',
        ufId: 20,
      },
      {
        cidade: 'Ventania',
        ufId: 18,
      },
      {
        cidade: 'Venturosa',
        ufId: 16,
      },
      {
        cidade: 'Vera',
        ufId: 13,
      },
      {
        cidade: 'Vera Cruz',
        ufId: 20,
      },
      {
        cidade: 'Vera Cruz',
        ufId: 5,
      },
      {
        cidade: 'Vera Cruz',
        ufId: 23,
      },
      {
        cidade: 'Vera Cruz',
        ufId: 26,
      },
      {
        cidade: 'Vera Cruz do Oeste',
        ufId: 18,
      },
      {
        cidade: 'Vera Mendes',
        ufId: 17,
      },
      {
        cidade: 'Veranópolis',
        ufId: 23,
      },
      {
        cidade: 'Verdejante',
        ufId: 16,
      },
      {
        cidade: 'Verdelândia',
        ufId: 11,
      },
      {
        cidade: 'Verê',
        ufId: 18,
      },
      {
        cidade: 'Vereda',
        ufId: 5,
      },
      {
        cidade: 'Veredinha',
        ufId: 11,
      },
      {
        cidade: 'Veríssimo',
        ufId: 11,
      },
      {
        cidade: 'Vermelho Novo',
        ufId: 11,
      },
      {
        cidade: 'Vertente do Lério',
        ufId: 16,
      },
      {
        cidade: 'Vertentes',
        ufId: 16,
      },
      {
        cidade: 'Vespasiano',
        ufId: 11,
      },
      {
        cidade: 'Vespasiano Corrêa',
        ufId: 23,
      },
      {
        cidade: 'Viadutos',
        ufId: 23,
      },
      {
        cidade: 'Viamão',
        ufId: 23,
      },
      {
        cidade: 'Viana',
        ufId: 8,
      },
      {
        cidade: 'Viana',
        ufId: 10,
      },
      {
        cidade: 'Vianópolis',
        ufId: 9,
      },
      {
        cidade: 'Vicência',
        ufId: 16,
      },
      {
        cidade: 'Vicente Dutra',
        ufId: 23,
      },
      {
        cidade: 'Vicentina',
        ufId: 12,
      },
      {
        cidade: 'Vicentinópolis',
        ufId: 9,
      },
      {
        cidade: 'Viçosa',
        ufId: 20,
      },
      {
        cidade: 'Viçosa',
        ufId: 2,
      },
      {
        cidade: 'Viçosa',
        ufId: 11,
      },
      {
        cidade: 'Viçosa do Ceará',
        ufId: 6,
      },
      {
        cidade: 'Victor Graeff',
        ufId: 23,
      },
      {
        cidade: 'Vidal Ramos',
        ufId: 24,
      },
      {
        cidade: 'Videira',
        ufId: 24,
      },
      {
        cidade: 'Vieiras',
        ufId: 11,
      },
      {
        cidade: 'Vieirópolis',
        ufId: 15,
      },
      {
        cidade: 'Vigia',
        ufId: 14,
      },
      {
        cidade: 'Vila Bela da Santíssima Trindade',
        ufId: 13,
      },
      {
        cidade: 'Vila Boa',
        ufId: 9,
      },
      {
        cidade: 'Vila Flor',
        ufId: 20,
      },
      {
        cidade: 'Vila Flores',
        ufId: 23,
      },
      {
        cidade: 'Vila Lângaro',
        ufId: 23,
      },
      {
        cidade: 'Vila Maria',
        ufId: 23,
      },
      {
        cidade: 'Vila Nova do Piauí',
        ufId: 17,
      },
      {
        cidade: 'Vila Nova do Sul',
        ufId: 23,
      },
      {
        cidade: 'Vila Nova dos Martírios',
        ufId: 10,
      },
      {
        cidade: 'Vila Pavão',
        ufId: 8,
      },
      {
        cidade: 'Vila Propício',
        ufId: 9,
      },
      {
        cidade: 'Vila Rica',
        ufId: 13,
      },
      {
        cidade: 'Vila Valério',
        ufId: 8,
      },
      {
        cidade: 'Vila Velha',
        ufId: 8,
      },
      {
        cidade: 'Vilhena',
        ufId: 21,
      },
      {
        cidade: 'Vinhedo',
        ufId: 26,
      },
      {
        cidade: 'Viradouro',
        ufId: 26,
      },
      {
        cidade: 'Virgem da Lapa',
        ufId: 11,
      },
      {
        cidade: 'Virgínia',
        ufId: 11,
      },
      {
        cidade: 'Virginópolis',
        ufId: 11,
      },
      {
        cidade: 'Virgolândia',
        ufId: 11,
      },
      {
        cidade: 'Virmond',
        ufId: 18,
      },
      {
        cidade: 'Visconde do Rio Branco',
        ufId: 11,
      },
      {
        cidade: 'Viseu',
        ufId: 14,
      },
      {
        cidade: 'Vista Alegre',
        ufId: 23,
      },
      {
        cidade: 'Vista Alegre do Alto',
        ufId: 26,
      },
      {
        cidade: 'Vista Alegre do Prata',
        ufId: 23,
      },
      {
        cidade: 'Vista Gaúcha',
        ufId: 23,
      },
      {
        cidade: 'Vista Serrana',
        ufId: 15,
      },
      {
        cidade: 'Vitor Meireles',
        ufId: 24,
      },
      {
        cidade: 'Vitória',
        ufId: 8,
      },
      {
        cidade: 'Vitória Brasil',
        ufId: 26,
      },
      {
        cidade: 'Vitória da Conquista',
        ufId: 5,
      },
      {
        cidade: 'Vitória das Missões',
        ufId: 23,
      },
      {
        cidade: 'Vitória de Santo Antão',
        ufId: 16,
      },
      {
        cidade: 'Vitória do Jari',
        ufId: 4,
      },
      {
        cidade: 'Vitória do Mearim',
        ufId: 10,
      },
      {
        cidade: 'Vitória do Xingu',
        ufId: 14,
      },
      {
        cidade: 'Vitorino',
        ufId: 18,
      },
      {
        cidade: 'Vitorino Freire',
        ufId: 10,
      },
      {
        cidade: 'Volta Grande',
        ufId: 11,
      },
      {
        cidade: 'Volta Redonda',
        ufId: 19,
      },
      {
        cidade: 'Votorantim',
        ufId: 26,
      },
      {
        cidade: 'Votuporanga',
        ufId: 26,
      },
      {
        cidade: 'Wagner',
        ufId: 5,
      },
      {
        cidade: 'Wall Ferraz',
        ufId: 17,
      },
      {
        cidade: 'Wanderlândia',
        ufId: 27,
      },
      {
        cidade: 'Wanderley',
        ufId: 5,
      },
      {
        cidade: 'Wenceslau Braz',
        ufId: 11,
      },
      {
        cidade: 'Wenceslau Braz',
        ufId: 18,
      },
      {
        cidade: 'Wenceslau Guimarães',
        ufId: 5,
      },
      {
        cidade: 'Westfália',
        ufId: 23,
      },
      {
        cidade: 'Witmarsum',
        ufId: 24,
      },
      {
        cidade: 'Xambioá',
        ufId: 27,
      },
      {
        cidade: 'Xambrê',
        ufId: 18,
      },
      {
        cidade: 'Xangri-lá',
        ufId: 23,
      },
      {
        cidade: 'Xanxerê',
        ufId: 24,
      },
      {
        cidade: 'Xapuri',
        ufId: 1,
      },
      {
        cidade: 'Xavantina',
        ufId: 24,
      },
      {
        cidade: 'Xaxim',
        ufId: 24,
      },
      {
        cidade: 'Xexéu',
        ufId: 16,
      },
      {
        cidade: 'Xinguara',
        ufId: 14,
      },
      {
        cidade: 'Xique-Xique',
        ufId: 5,
      },
      {
        cidade: 'Zabelê',
        ufId: 15,
      },
      {
        cidade: 'Zacarias',
        ufId: 26,
      },
      {
        cidade: 'Zé Doca',
        ufId: 10,
      },
      {
        cidade: 'Zortéa',
        ufId: 24,
      },
    ])
  }
}
