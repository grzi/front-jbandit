<template>
  <div>
    <jHeader v-bind:data='page'></jHeader>
    <jMenu v-bind:menus='page.menus'></jMenu>
    <jHighlights
    v-bind:trendings='page.trendingArticles'
    v-bind:lastArticle='page.lastArticle'
    ></jHighlights>
    <div class='container'>
      <div class='row'>
        <div class='col s12 m12 l6 '>
          <div class='padding-min'>
            <jSection v-bind:articles='page.billets'></jSection>
          </div>
        </div>
        <div class='col s12 m12 l6 '>
          <div class='padding-min'>
            <jSection v-bind:articles='page.tutorials'></jSection>
          </div>
        </div>
      </div>
    </div>
    <jFooter></jFooter>
  </div>
</template>

<script type = 'text/javascript' >
import Header from '@/components/commons/Header'
import Menu from '@/components/commons/Menu'
import ArticleHighlights from '@/components/home/ArticleHighlights'
import ArticleSection from '@/components/home/ArticleSection'
import Footer from '@/components/commons/Footer'
export default {
  name: 'Home',
  components: {
    'jHeader': Header,
    'jMenu': Menu,
    'jHighlights': ArticleHighlights,
    'jSection': ArticleSection,
    'jFooter': Footer
  },
  data () {
    return {
      'page': {
        'title': 'JBandit - Blog',
        'description': 'Bienvenue sur le site JBandit, un condensé d\'informations sur les nouvelles technologies.',
        'menus': [
          {
            'name': 'Billets',
            'link': 'Billets',
            'iconImage': ''
          },
          {
            'name': 'Tutoriels',
            'link': 'Tutoriels',
            'iconImage': ''
          }
        ],
        'lastArticle': {
          'title': 'Spring boot 2 et kotlin, l\'équipe gagnante ?',
          'link': 'spring-boot-2-and-kotlin',
          'img': 'blog1.jpg',
          'descr': 'Comment s\'allient la puissance de kotlin et de spring boot 2 ?',
          'date': '09/06/2018',
          'theme': 'Kotlin',
          'type': 'Billet'
        },
        'trendingArticles': [
          {
            'title': 'Intellij IDEA après 10 ans d\'eclipse ?',
            'link': 'intellij-idea-to-eclipse',
            'img': 'blog1.jpg',
            'descr': 'Découvrez mes quelques conseils après maintenant 1 an à me convertir à IntelliJ.',
            'date': '07/06/2018',
            'theme': 'IntelliJ',
            'type': 'Billet'
          },
          {
            'title': 'ElasticSearch - Hello world ',
            'link': 'kotlin-elastic-hello-world',
            'img': 'blog1.jpg',
            'descr': 'Exemple simple d\'une première implémentation d\'elastic search dans un projet Kotlin Spring boot.',
            'date': '06/06/2018',
            'theme': 'Base de données',
            'type': 'Billet'
          },
          {
            'title': 'Afficher tous les beans spring en mémoire',
            'link': 'spring-bean-list',
            'img': 'blog1.jpg',
            'descr': 'description article test',
            'date': '05/06/2018',
            'theme': 'Java',
            'type': 'Billet'
          },
          {
            'title': 'Dbeaver, je ne peux plus m\'en passer !',
            'link': 'dbeaver',
            'img': 'blog1.jpg',
            'descr': 'L\'outil dbeaver est devenu un outil nécessaire dans ma vie de développeur',
            'date': '04/06/2018',
            'theme': 'Base de données',
            'type': 'test'
          }
        ],
        'tutorials': [
          {
            'title': 'La mémoire JAVA - la comprendre et la dompter',
            'link': 'java-memory-management',
            'img': 'blog1.jpg',
            'descr': 'Apprenez comment fonctionne la mémoire java et comment la monitorer',
            'date': '09/06/2018',
            'theme': 'JAVA',
            'type': 'Tutoriel'
          },
          {
            'title': 'Unity - Installer un environnement de dev sous linux',
            'link': 'unity-ubuntu-how-to-install-environment',
            'img': 'blog1.jpg',
            'descr': 'description article test',
            'date': '04/06/2018',
            'theme': 'test',
            'type': 'Tutoriel'
          }
        ],
        'billets': [
          {
            'title': 'Intellij IDEA après 10 ans d\'eclipse ?',
            'link': 'intellij-idea-to-eclipse',
            'img': 'blog2.jpeg',
            'descr': 'Découvrez mes quelques conseils après maintenant 1 an à me convertir à IntelliJ.',
            'date': '07/06/2018',
            'theme': 'IntelliJ',
            'type': 'Billet'
          },
          {
            'title': 'ElasticSearch - Hello world ',
            'link': 'kotlin-elastic-hello-world',
            'img': 'blog1.jpg',
            'descr': 'Exemple simple d\'une première implémentation d\'elastic search dans un projet Kotlin Spring boot.',
            'date': '06/06/2018',
            'theme': 'Base de données',
            'type': 'Billet'
          },
          {
            'title': 'Afficher tous les beans spring en mémoire',
            'link': 'spring-bean-list',
            'img': 'blog3.jpg',
            'descr': 'description article test',
            'date': '05/06/2018',
            'theme': 'Java',
            'type': 'Billet'
          },
          {
            'title': 'Dbeaver, je ne peux plus m\'en passer !',
            'link': 'dbeaver',
            'img': 'blog1.jpg',
            'descr': 'L\'outil dbeaver est devenu un outil nécessaire dans ma vie de développeur',
            'date': '04/06/2018',
            'theme': 'Base de données',
            'type': 'test'
          }
        ]
      }
    }
  }
}
</script>
<style/>
