const data = [
  {"numer": "P11 A", "mieszkanie": "A", "kondygnacja": "parter", "pow_uzytkowa": "64,32", "typ_pow_dodatkowej": "ogrodek", "pow_dodatkowa": 81, "cena": 289500, "status": "wolny"},
  {"numer": "P11 B", "mieszkanie": "B", "kondygnacja": "piętro", "pow_uzytkowa": "66,57", "typ_pow_dodatkowej": "strych", "pow_dodatkowa": 15, "cena": 259500, "status": "rezerwacja"},
  {"numer": "P12 A", "mieszkanie": "A", "kondygnacja": "parter", "pow_uzytkowa": "64,32", "typ_pow_dodatkowej": "ogrodek", "pow_dodatkowa": 81, "cena": 289500, "status": "wolny"},
  {"numer": "P12 B", "mieszkanie": "B", "kondygnacja": "piętro", "pow_uzytkowa": "66,57", "typ_pow_dodatkowej": "strych", "pow_dodatkowa": 15, "cena": 259500, "status": "wolny"},
  {"numer": "P13 A", "mieszkanie": "A", "kondygnacja": "parter", "pow_uzytkowa": "64,32", "typ_pow_dodatkowej": "ogrodek", "pow_dodatkowa": 81, "cena": 289500, "status": "wolny"},
  {"numer": "P13 B", "mieszkanie": "B", "kondygnacja": "piętro", "pow_uzytkowa": "66,57", "typ_pow_dodatkowej": "strych", "pow_dodatkowa": 15, "cena": 259500, "status": "wolny"},
  {"numer": "P14 A", "mieszkanie": "A", "kondygnacja": "parter", "pow_uzytkowa": "64,32", "typ_pow_dodatkowej": "ogrodek", "pow_dodatkowa": 81, "cena": 289500, "status": "wolny"},
  {"numer": "P14 B", "mieszkanie": "B", "kondygnacja": "piętro", "pow_uzytkowa": "66,57", "typ_pow_dodatkowej": "strych", "pow_dodatkowa": 15, "cena": 259500, "status": "wolny"},
  {"numer": "P15 A", "mieszkanie": "A", "kondygnacja": "parter", "pow_uzytkowa": "64,32", "typ_pow_dodatkowej": "ogrodek", "pow_dodatkowa": 81, "cena": 289500, "status": "wolny"},
  {"numer": "P15 B", "mieszkanie": "B", "kondygnacja": "piętro", "pow_uzytkowa": "66,57", "typ_pow_dodatkowej": "strych", "pow_dodatkowa": 15, "cena": 259500, "status": "sprzedany"},
  {"numer": "P16 A", "mieszkanie": "A", "kondygnacja": "parter", "pow_uzytkowa": "64,32", "typ_pow_dodatkowej": "ogrodek", "pow_dodatkowa": 81, "cena": 289500, "status": "wolny"},
  {"numer": "P16 B", "mieszkanie": "B", "kondygnacja": "piętro", "pow_uzytkowa": "66,57", "typ_pow_dodatkowej": "strych", "pow_dodatkowa": 15, "cena": 259500, "status": "wolny"},
  {"numer": "P17 A", "mieszkanie": "A", "kondygnacja": "parter", "pow_uzytkowa": "64,32", "typ_pow_dodatkowej": "ogrodek", "pow_dodatkowa": 81, "cena": 289500, "status": "rezerwacja"},
  {"numer": "P17 B", "mieszkanie": "B", "kondygnacja": "piętro", "pow_uzytkowa": "66,57", "typ_pow_dodatkowej": "strych", "pow_dodatkowa": 15, "cena": 259500, "status": "wolny"},
  {"numer": "P18 A", "mieszkanie": "A", "kondygnacja": "parter", "pow_uzytkowa": "64,32", "typ_pow_dodatkowej": "ogrodek", "pow_dodatkowa": 81, "cena": 289500, "status": "wolny"},
  {"numer": "P18 B", "mieszkanie": "B", "kondygnacja": "piętro", "pow_uzytkowa": "66,57", "typ_pow_dodatkowej": "strych", "pow_dodatkowa": 15, "cena": 259500, "status": "rezerwacja"},
  {"numer": "P19 A", "mieszkanie": "A", "kondygnacja": "parter", "pow_uzytkowa": "64,32", "typ_pow_dodatkowej": "ogrodek", "pow_dodatkowa": 81, "cena": 289500, "status": "wolny"},
  {"numer": "P19 B", "mieszkanie": "B", "kondygnacja": "piętro", "pow_uzytkowa": "66,57", "typ_pow_dodatkowej": "strych", "pow_dodatkowa": 15, "cena": 259500, "status": "wolny"},
  {"numer": "P20 A", "mieszkanie": "A", "kondygnacja": "parter", "pow_uzytkowa": "64,32", "typ_pow_dodatkowej": "ogrodek", "pow_dodatkowa": 81, "cena": 289500, "status": "sprzedany"},
  {"numer": "P20 B", "mieszkanie": "B", "kondygnacja": "piętro", "pow_uzytkowa": "66,57", "typ_pow_dodatkowej": "strych", "pow_dodatkowa": 15, "cena": 259500, "status": "wolny"},
  {"numer": "P21 A", "mieszkanie": "A", "kondygnacja": "parter", "pow_uzytkowa": "64,32", "typ_pow_dodatkowej": "ogrodek", "pow_dodatkowa": 81, "cena": 289500, "status": "sprzedany"},
  {"numer": "P21 B", "mieszkanie": "B", "kondygnacja": "piętro", "pow_uzytkowa": "66,57", "typ_pow_dodatkowej": "strych", "pow_dodatkowa": 15, "cena": 259500, "status": "wolny"},
  {"numer": "P22 A", "mieszkanie": "A", "kondygnacja": "parter", "pow_uzytkowa": "64,32", "typ_pow_dodatkowej": "ogrodek", "pow_dodatkowa": 81, "cena": 289500, "status": "wolny"},
  {"numer": "P22 B", "mieszkanie": "B", "kondygnacja": "piętro", "pow_uzytkowa": "66,57", "typ_pow_dodatkowej": "strych", "pow_dodatkowa": 15, "cena": 259500, "status": "wolny"},
  {"numer": "P23 A", "mieszkanie": "A", "kondygnacja": "parter", "pow_uzytkowa": "64,32", "typ_pow_dodatkowej": "ogrodek", "pow_dodatkowa": 81, "cena": 289500, "status": "wolny"},
  {"numer": "P23 B", "mieszkanie": "B", "kondygnacja": "piętro", "pow_uzytkowa": "66,57", "typ_pow_dodatkowej": "strych", "pow_dodatkowa": 15, "cena": 259500, "status": "rezerwacja"},
  {"numer": "P24 A", "mieszkanie": "A", "kondygnacja": "parter", "pow_uzytkowa": "64,32", "typ_pow_dodatkowej": "ogrodek", "pow_dodatkowa": 81, "cena": 289500, "status": "wolny"},
  {"numer": "P24 B", "mieszkanie": "B", "kondygnacja": "piętro", "pow_uzytkowa": "66,57", "typ_pow_dodatkowej": "strych", "pow_dodatkowa": 15, "cena": 259500, "status": "wolny"},
  {"numer": "P25 A", "mieszkanie": "A", "kondygnacja": "parter", "pow_uzytkowa": "64,32", "typ_pow_dodatkowej": "ogrodek", "pow_dodatkowa": 81, "cena": 289500, "status": "wolny"},
  {"numer": "P25 B", "mieszkanie": "B", "kondygnacja": "piętro", "pow_uzytkowa": "66,57", "typ_pow_dodatkowej": "strych", "pow_dodatkowa": 15, "cena": 259500, "status": "sprzedany"},
  {"numer": "P26 A", "mieszkanie": "A", "kondygnacja": "parter", "pow_uzytkowa": "64,32", "typ_pow_dodatkowej": "ogrodek", "pow_dodatkowa": 81, "cena": 289500, "status": "wolny"},
  {"numer": "P26 B", "mieszkanie": "B", "kondygnacja": "piętro", "pow_uzytkowa": "66,57", "typ_pow_dodatkowej": "strych", "pow_dodatkowa": 15, "cena": 259500, "status": "wolny"},
  {"numer": "P27 A", "mieszkanie": "A", "kondygnacja": "parter", "pow_uzytkowa": "64,32", "typ_pow_dodatkowej": "ogrodek", "pow_dodatkowa": 81, "cena": 289500, "status": "wolny"},
  {"numer": "P27 B", "mieszkanie": "B", "kondygnacja": "piętro", "pow_uzytkowa": "66,57", "typ_pow_dodatkowej": "strych", "pow_dodatkowa": 15, "cena": 259500, "status": "wolny"},
  {"numer": "P28 A", "mieszkanie": "A", "kondygnacja": "parter", "pow_uzytkowa": "64,32", "typ_pow_dodatkowej": "ogrodek", "pow_dodatkowa": 81, "cena": 289500, "status": "wolny"},
  {"numer": "P28 B", "mieszkanie": "B", "kondygnacja": "piętro", "pow_uzytkowa": "66,57", "typ_pow_dodatkowej": "strych", "pow_dodatkowa": 15, "cena": 259500, "status": "sprzedany"},
  {"numer": "P29 A", "mieszkanie": "A", "kondygnacja": "parter", "pow_uzytkowa": "64,32", "typ_pow_dodatkowej": "ogrodek", "pow_dodatkowa": 81, "cena": 289500, "status": "wolny"},
  {"numer": "P29 B", "mieszkanie": "B", "kondygnacja": "piętro", "pow_uzytkowa": "66,57", "typ_pow_dodatkowej": "strych", "pow_dodatkowa": 15, "cena": 259500, "status": "wolny"},
  {"numer": "P30 A", "mieszkanie": "A", "kondygnacja": "parter", "pow_uzytkowa": "64,32", "typ_pow_dodatkowej": "ogrodek", "pow_dodatkowa": 81, "cena": 289500, "status": "sprzedany"},
  {"numer": "P30 B", "mieszkanie": "B", "kondygnacja": "piętro", "pow_uzytkowa": "66,57", "typ_pow_dodatkowej": "strych", "pow_dodatkowa": 15, "cena": 259500, "status": "rezerwacja"},
];