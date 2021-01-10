<template>
  <div>
    <!-- I really don't undrestand this 'prettier' formating -->
    Tato stránka je opensource projekt pod
    <a href="https://opensource.org/licenses/MIT" target="_blank">MIT licencí</a
    >, momentálně spravovaná jedním člověkem:
    <a href="https://thenovi.github.io/" target="_blank">TheNovi</a>. Napsaná
    pomocí knihovny <a href="https://vuejs.org/" target="_blank">Vue.js</a> v
    jazyce
    <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> a
    nasazená díky
    <a href="https://www.netlify.com/" target="_blank">Netlify.com</a>.
    <br />
    Kód je na
    <a href="https://github.com/TheNovi/TlupaPolis-Web" target="_blank">Zde</a>

    <br />
    <br />
    Momentálně sháním designery/grafiky, akorát předem říkám že ti nic
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
    Popřípadě zde jsou ostaní možnosti komunikace:
    <a href="https://thenovi.github.io/#/contact" target="_blank">contact</a>

    <!-- English -->
    <br />
    <br />
    <br />
    This site is opensource project under
    <a href="https://opensource.org/licenses/MIT" target="_blank">MIT licence</a
    >, at this time only one person is working on it:
    <a href="https://thenovi.github.io/" target="_blank">TheNovi</a>. Using
    <a href="https://vuejs.org/" target="_blank">Vue.js</a> library, writed in
    <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>
    languge and deployed on
    <a href="https://www.netlify.com/" target="_blank">Netlify.com</a>.
    <br />
    You can find code
    <a href="https://github.com/TheNovi/TlupaPolis-Web" target="_blank">here</a>
  </div>
</template>
<script lang="ts">
// TODO This needs some styling
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Contact extends Vue {
  static title = "Kontakt";
}
</script>
