<template>
  <div>
    <!-- I really don't undrestand this 'prettier' formating -->
    Tato stránka je opensource projekt pod
    <a href="https://opensource.org/licenses/MIT" target="_blank">MIT licencí</a
    >, momentálně spravovaná jedním člověkem:
    <a href="https://thenovi.github.io/" target="_blank">TheNovi</a>. Napsaná
    pomocí knihovny <a href="https://vuejs.org/" target="_blank">Vue.js</a> v
    jazyce
    <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>.
    <br />
    Kód je na
    <a href="https://github.com/TheNovi/TlupaPolis-Web" target="_blank">Zde</a>

    <br />
    <br />
    Momentálně scháním designery/grafiky, akorát předem říkám že ti nic
    nezaplatím (tento project je zatím dost malý, abych do něj vrážel peníze).
    <br />
    Pokud máš stejně zájem: prosím kontaktujte TheNovi.
    <br />
    <br />
    Programátorskou pomoc nesháním, pokud by jsi náhodou moc chtěl pomoci, tak:
    forkni repo, udělej změny a requestni pull. <br />
    Ale předem varuji: na svůj kód jsem dost háklivý a nejspíš pull-request
    nepříjmu.
    <br />
    <br />
    Pokud jsi našel chybu nebo tě napadlo nějaké vylepšení: podívej se
    <a href="https://github.com/TheNovi/TlupaPolis-Web/issues" target="_blank"
      >zde</a
    >
    jestli to už nenašel někdo jiný. <br />
    A pokud ne, tak vyplně nové issue (s assigmentama, labelama atd. si starost
    nedělej, ty vyplním sám. Vyplň jen název a popis). <br />
    Nebo (pokud nevíš co je issue) kontaktuj přímo TheNovi.
    <br />
    <br />
    Kontakt na TheNovi: <br />
    Nejlépe mi napíšeš přes discord: TheNovi#9782 <br />
    Popřípadě zde je zbytek:
    <a href="https://thenovi.github.io/html/Contact.html" target="_blank"
      >contact</a
    >
    <br />
    (plus facebook:
    <a href="https://www.facebook.com/TheN0vi" target="_blank">facebook</a>)

    <!-- English -->
    <br />
    <br />
    <br />
    This site is opensource project under
    <a href="https://opensource.org/licenses/MIT" target="_blank">MIT licence</a
    >, at this time only one person is working on it:
    <a href="https://thenovi.github.io/" target="_blank">TheNovi</a>. Using
    <a href="https://vuejs.org/" target="_blank">Vue.js</a> library and
    <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>
    languge.
    <br />
    You can find code
    <a href="https://github.com/TheNovi/TlupaPolis-Web" target="_blank">here</a>
  </div>
</template>
<script lang="ts">
// TODO This needs some styling
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Contact extends Vue {}
</script>
