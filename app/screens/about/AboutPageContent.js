import React from 'react';

import FeedbackLink from 'components/customization/FeedbackLink';
import { getCurrentCustomization } from 'utils/customizationUtils';

function AboutPageContent() {
  let registerLink;

  switch (getCurrentCustomization()) {

    case 'ESPOO': {
      registerLink = (
        <a href="http://www.helmet-kirjasto.fi/varaamo-palaute/rekisteriseloste.php">
          Asiakasrekisteriseloste
        </a>
      );

      return (
        <div>
          <h1>Tietoa varaamo.espoo.fi –palvelusta</h1>
          <p className="lead">
            Varaamo on Helsingin kaupungin ylläpitämä verkkopalvelu, jonka kautta voi varata
            Espoon ja Helsingin kaupunkien julkisia tiloja sekä työpisteitä yksityiseen käyttöön.
          </p>
          <p>
            Tilavarausjärjestelmä on testausvaiheessa, eikä pilottikäytössä olevassa versiossa ole
            vielä kaikkia suunnitteilla olevia ominaisuuksia ja toiminnallisuuksia.
          </p>
          <p>
            Pilottivaiheessa palvelun kautta on varattavissa Espoon Ison Omenan Palvelutorin
            (kirjasto, terveysasema, neuvola) sekä Helsingin kaupunginkirjaston,
            nuorisoasiainkeskuksen sekä varhaiskasvatusviraston tiloja, työpisteitä ja laitteita.
          </p>
          <p>
            Varaamo perustuu Helsingin kaupungin avoimeen <a href="http://dev.hel.fi/apis/respa">
            tilavarausrajapintaan</a>, joka on toteutettu osana Suomen suurimpien kaupunkien
            yhteistä <a href="http://6aika.fi">6aika - Avoimet ja älykkäät palvelut</a> -hanketta.
          </p>
          <p>
            Varaamo-tilavarausjärjestelmän kehittäminen on osa Helsingin kaupungin
            strategiaohjelmaa 2013 - 2016 (Tehokkaat ja toimivat tukipalvelut) sekä
            tietotekniikkaohjelmaa 2015 - 2017 (Datarajapinnat ja avoin kaupunkikehitys).
          </p>
          <p>
            Virastoyhteisen tilavaraushankkeen tavoitteena on julkisten tilojen käytön
            tehostaminen, saavutettavuuden parantaminen ja tilojen käyttöön liittyvien
            kustannusten alentaminen kaupungin tilavarauskäytäntöjä yhtenäistämällä.
          </p>
          <p>
            Palvelua kehitetään edelleen ja toivomme palvelun käyttäjiltä palautetta. Palautetta
            voit antaa <FeedbackLink text="tämän linkin" /> kautta.
          </p>
          <h3>Asiakasrekisteriseloste</h3>
          <p>
            Palveluun liittyvän asiakasreskisteriselosteen näet täältä: {registerLink}
          </p>
        </div>
      );
    }

    default: {
      registerLink = (
        <a href="http://www.helmet-kirjasto.fi/varaamo-palaute/rekisteriseloste.php">
          Asiakasrekisteriseloste
        </a>
      );

      return (
        <div>
          <h1>Tietoa varaamo.hel.fi –palvelusta</h1>
          <p className="lead">
            Varaamo on Helsingin kaupungin ylläpitämä verkkopalvelu, jonka kautta voi varata
            kaupungin julkisia tiloja sekä työpisteitä yksityiseen käyttöön.
          </p>
          <p>
            Tilavarausjärjestelmä on testausvaiheessa, eikä pilottikäytössä olevassa versiossa ole
            vielä kaikkia suunnitteilla olevia ominaisuuksia ja toiminnallisuuksia.
          </p>
          <p>
            Pilottivaiheessa palvelun kautta on varattavissa kaupunginkirjaston,
            nuorisoasiainkeskuksen sekä varhaiskasvatusviraston tiloja, työpisteitä ja laitteita.
          </p>
          <p>
            Varaamo perustuu Helsingin kaupungin avoimeen <a href="http://dev.hel.fi/apis/respa">
            tilavarausrajapintaan</a>, joka on toteutettu osana Suomen suurimpien kaupunkien
            yhteistä <a href="http://6aika.fi">6aika - Avoimet ja älykkäät palvelut</a> -hanketta.
          </p>
          <p>
            Varaamo-tilavarausjärjestelmän kehittäminen on osa Helsingin kaupungin
            strategiaohjelmaa 2013 - 2016 (Tehokkaat ja toimivat tukipalvelut) sekä
            tietotekniikkaohjelmaa 2015 - 2017 (Datarajapinnat ja avoin kaupunkikehitys).
          </p>
          <p>
            Virastoyhteisen tilavaraushankkeen tavoitteena on julkisten tilojen käytön
            tehostaminen, saavutettavuuden parantaminen ja tilojen käyttöön liittyvien
            kustannusten alentaminen kaupungin tilavarauskäytäntöjä yhtenäistämällä.
          </p>
          <p>
            Palvelua kehitetään edelleen ja toivomme palvelun käyttäjiltä palautetta. Palautetta
            voit antaa <FeedbackLink text="tämän linkin" /> kautta.
          </p>
          <h3>Asiakasrekisteriseloste</h3>
          <p>
            Palveluun liittyvän asiakasreskisteriselosteen näet täältä: {registerLink}
          </p>
        </div>
      );
    }
  }
}

AboutPageContent.propTypes = {};

export default AboutPageContent;