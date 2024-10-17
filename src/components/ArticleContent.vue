<script setup>
import { defineProps } from 'vue';

defineProps({
  article: Object,
});
</script>
<template>
  <div class="mb-3">
    <h2 class="mb-3"># {{ article.name }}</h2>
    <div class="row">
      <div v-for="(item, index) in article.categories" :key="index" class="col-auto mb-2">
        <TagButton :category="item"></TagButton>
      </div>
    </div>
  </div>
  <div class="d-flex flex-row">
    <img src="https://picsum.photos/500/300" class="me-5" />
    <div class="d-flex flex-column">
      <h5 class="fw-bold">
        Author : <span class="fw-normal">{{ article.author }}</span>
      </h5>
      <h5 class="fw-bold">
        Source : <span class="fw-normal">{{ article.source }}</span>
      </h5>
      <div v-if="article.keywords && article.keywords.length > 0" class="d-flex flex-column">
        <h5 class="fw-bold">Mots clefs :</h5>
        <div class="d-flex flex-wrap">
          <span
            v-for="(item, index) in article.keywords"
            :key="index"
            class="badge bg-secondary text-uppercase ms-2 d-flex align-items-center text-center"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-5">
    <p>
      La cybersécurité est un domaine crucial dans le monde numérique moderne. Elle consiste à protéger les systèmes
      informatiques, les réseaux, et les données contre les attaques malveillantes, les intrusions, et les violations de
      la confidentialité. Avec la multiplication des dispositifs connectés, la surface d’attaque des cybercriminels
      s’élargit, rendant indispensable la mise en place de mesures de sécurité robustes.
    </p>
    <p>
      Les entreprises doivent non seulement protéger leurs infrastructures techniques, mais aussi former leurs employés
      à identifier les menaces potentielles, telles que le phishing ou les logiciels malveillants. Les cyberattaques
      deviennent de plus en plus sophistiquées et ciblées. Les ransomwares, par exemple, sont utilisés pour chiffrer des
      données sensibles et exiger une rançon pour leur déblocage.
    </p>
    <p>
      Les organisations, qu'elles soient petites ou grandes, doivent être vigilantes et adopter des stratégies de
      cybersécurité proactives pour anticiper ces menaces. L'usage de technologies telles que la cryptographie, les
      pare-feux, et les systèmes de détection d'intrusion contribue à renforcer la sécurité, mais la vigilance humaine
      reste un élément clé pour prévenir les failles.
    </p>
    <p>
      La cybersécurité ne concerne pas uniquement les entreprises, mais également les particuliers. Avec l'explosion des
      objets connectés et des réseaux sociaux, chacun est exposé à des risques. Le vol d'identité, le piratage des
      comptes bancaires, et l'espionnage numérique sont des dangers courants auxquels tout internaute peut être
      confronté.
    </p>
    <p>
      Il est essentiel de suivre des bonnes pratiques comme l'utilisation de mots de passe complexes, l'activation de
      l'authentification à deux facteurs, et la mise à jour régulière des logiciels pour limiter ces risques. Enfin, la
      réglementation en matière de cybersécurité devient de plus en plus stricte, en particulier avec des lois comme le
      Règlement général sur la protection des données (RGPD) en Europe.
    </p>
    <p>
      Les entreprises qui ne prennent pas au sérieux la protection des données de leurs clients risquent des amendes
      lourdes et une perte de confiance de la part du public. Le respect des normes de sécurité est désormais une
      priorité incontournable pour toute organisation qui souhaite prospérer dans l'économie numérique actuelle.
    </p>
  </div>
</template>
