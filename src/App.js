import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import ListItem from './components/ListItem';

const gamesListData = [
  {
    href:"https://www.twitch.tv/directory/game/Dark%20Souls%3A%20Prepare%20to%20Die%20Edition",
    imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/924683477_IGDB-144x192.jpg",
    alt:"Imagem do jogo Dark Souls",
  },
  {
    href:"https://www.twitch.tv/directory/game/Monster%20Hunter%20Rise",
    imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/1275666892_IGDB-144x192.jpg",
    alt:"Imagem do jogo Monster Hunter Rise",
  },    
  {
    href:"https://www.twitch.tv/directory/game/Sekiro%3A%20Shadows%20Die%20Twice",
    imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/506415_IGDB-144x192.jpg",
    alt:"Imagem do jogo Sekiro",
  },
  {
    href:"https://www.twitch.tv/directory/game/Elden%20Ring",
    imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/512953_IGDB-144x192.jpg",
    alt:"Imagem do jogo Elder Ring"
  },
  {
    href:"https://www.twitch.tv/directory/game/Final%20Fantasy%20Tactics",
    imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/18181_IGDB-144x192.jpg",
    alt:"Imagem do jogo Final Fantasy Tatics",
  }
]

const channelListData = [
  {
    href:"https://www.twitch.tv/maykbrito",
    imageUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt:"Imagem de Mayk Brito"
  },
  {
    href:"https://www.twitch.tv/luizknight",
    imageUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/b2692c94-fb76-40d2-a8c2-c2ec6c5eb37e-profile_image-70x70.png",
    alt:"Imagem de Luiz Knight"
  },
  {
    href:"https://www.twitch.tv/canaltaticads",
    imageUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/e35f5f70-f82a-4301-ae8f-5ee32dc6d63b-profile_image-70x70.png",
    alt:"Imagem de Canal tatica DS"
  }
]

const socialListData = [
  {
    href:"https://www.twitch.tv/evilisglenio",
    imageUrl:"/assets/twitch.svg",
    alt:"Logo do Twitch"
  },
  {
    href:"https://twitter.com/EvilisGlenio",
    imageUrl:"/assets/twitter.svg",
    alt:"Logo do Twitter"
  },
  {
    href:"https://www.instagram.com/evilis.glenio/",
    imageUrl:"/assets/instagram.svg",
    alt:"Logo do Instagram"
  },
  {
    href:"https://www.youtube.com/channel/UCanWGxhT1xvFcAa3Bx4czvw",
    imageUrl:"/assets/youtube.svg",
    alt:"Logo do YouTube"
  }

]

function App() {
  return (
    <div className="App">
      {/* Trazendo o componente Header */}
      <Header />
      {/*Criando o Main*/}
      <main>
        {/* Trazendo o componente Section */}
        <Section title="Meus jogos" 
        subtitle="Os games que mais curto jogar"
        className="games-list">
          
          {
            gamesListData.map(function(item) {
              return (
                <ListItem 
                  url={item.href}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }
          
          
        </Section>
        
        <Section title="Canais e Streamers" 
        subtitle="Lista de transmissões que não perco!" 
        className="channel-list">
          {
            /*Utilizando Arrow Function*/
          channelListData.map(item =>
             (
              <ListItem
                url={item.href}
                imageUrl={item.imageUrl}
                alt={item.alt} />
            )
          )
        }
        </Section>

        <Section
        title="Minhas redes"
        subtitle="Se conecte comigo agora mesmo!"
        className="social-list">

          {
            socialListData.map(item => 
              (
                <ListItem
                  url={item.href}
                  imageUrl={item.imageUrl}
                  alt={item.alt} />
              ))
          }

        </Section>

      </main>

    </div>
  );
}

export default App;
