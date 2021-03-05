function open_win(url) {
  window.open(url);
}

const covers = {
  Dsotm: {
    links:
      "https://open.spotify.com/album/2WT1pbYjLJciAR26yMebkH?si=NEXwKS79RLuEhGAuUd32aA",
    description:
      "One of Britain’s most successful and long lived avant-garde rock bands, Pink Floyd emerged relatively unsullied from the mire of mid-Sixties British psychedelic music as early experimenters with outer space concepts. Although that phase of the band’s development was of short duration, Pink Floyd have from that time been the pop scene’s preeminent techno-rockers: four musicians with a command of electronic instruments who wield an arsenal of sound effects with authority and finesse. While Pink Floyd’s albums were hardly hot tickets in the shops, they began to attract an enormous following through their US tours. They have more recently developed a musical style capable of sustaining their dazzling and potentially overwhelming sonic wizardry.",
    imageLinks: "Dark_side_of_the_moon.jpg",
  },
  Bowie: {
    links:
      "https://open.spotify.com/album/48D1hRORqJq52qsnUYZX56?si=f5gK6jwmT0OoU4IjuUp6ig",
    imageLinks:
      "the rise and fall of ziggy stardust and the spiders from mars.jpg",
    description:
      "One of Britain’s most successful and long lived avant-garde rock bands, Pink Floyd emerged relatively unsullied from the mire of mid-Sixties British psychedelic music as early experimenters with outer space concepts. Although that phase of the band’s development was of short duration, Pink Floyd have from that time been the pop scene’s preeminent techno-rockers: four musicians with a command of electronic instruments who wield an arsenal of sound effects with authority and finesse. While Pink Floyd’s albums were hardly hot tickets in the shops, they began to attract an enormous following through their US tours. They have more recently developed a musical style capable of sustaining their dazzling and potentially overwhelming sonic wizardry.",
  },
  IR: {
    links:
      "https://open.spotify.com/album/5vkqYmiPBYLaalcmjujWxK?si=G15grI3zSB6LPv4t-2tn_g",
    imageLinks: "In_Rainbows.jpg",
    description:
      "In Rainbows is the seventh studio album by the English rock band Radiohead. It was self-released on 10 October 2007 as a pay-what-you-want download, followed by a physical release internationally through XL Recordings in December 2007 and in North America through TBD Records on 1 January 2008. It was Radiohead's first release after their recording contract with EMI ended with their album Hail to the Thief (2003).",
  },
  Roaes: {
    links:
      "https://open.spotify.com/album/5QE8eXeN0q8M7atLb1fT6c?si=RBpWX-sNTpq_yILOMrwnfg",
    imageLinks: "Riot on an empty stree.jpg",
    description:
      "One of Britain’s most successful and long lived avant-garde rock bands, Pink Floyd emerged relatively unsullied from the mire of mid-Sixties British psychedelic music as early experimenters with outer space concepts. Although that phase of the band’s development was of short duration, Pink Floyd have from that time been the pop scene’s preeminent techno-rockers: four musicians with a command of electronic instruments who wield an arsenal of sound effects with authority and finesse. While Pink Floyd’s albums were hardly hot tickets in the shops, they began to attract an enormous following through their US tours. They have more recently developed a musical style capable of sustaining their dazzling and potentially overwhelming sonic wizardry.",
  },
  Currents: {
    links:
      "https://open.spotify.com/album/79dL7FLiJFOO0EoehUHQBv?si=8ZeAmwcwR9K1Glfq5PmqLw",
    imageLinks: "Currents.jpg",
    description:
      "Lonerism set Tame Impala up to disappoint. The 2012 album garnered universal praise, launching Kevin Parker’s group into the upper tier of festival lineups and cultish fan followings. The Australian band was left with two routes: Rehash more psych rock, but face the blame of taking the easy route; or do something entirely new, but lose fans in the process. Parker isn’t one to turn down a challenge, especially when arranged by none other than himself, so he dropped “Let It Happen” and everyone scrambled. Tame Impala takes a conscious risk on Currents. To them, taking that risk is more fate than choice, and when the ambitious Currents pulls you into Parker’s mindset, the switch from guitars to synths makes perfect sense.",
  },
  Mbdtf: {
    links:
      "https://open.spotify.com/track/1UGD3lW3tDmgZfAVDh6w7r?si=dfC7uKyESoevHW2nRhfp3Q",
    imageLinks: "My_Beautiful_Dark_Twisted_Fantasy.jpg",
    description:
      "My Beautiful Dark Twisted Fantasy is hands-down the most ambitious mainstream rap album ever made. It also may be the best produced. Everything here sparkles and nothing is out of place. It probably wasn’t by design, but the very title of the album spits in the face of the goofy “real” concept. Album opener “Dark Fantasy” kicks off with a spoken word intro from Nicki Minaj, whose talking voice is almost as interesting as her rapping voice. As soon as her voice dies down it gives way to a maelstrom of strings, horns, synths and percussion that does not give way until the final moments of Gil Scott-Heron’s outraged rant on “Who Will Survive in America”.",
  },
  I: {
    links:
      "https://open.spotify.com/album/5zi7WsKlIiUXv09tbGLKsE?si=9NIzSY22STawWnE8ISO_jg",
    imageLinks: "IGOR.jpg",
    description:
      "Tyler, the Creator’s sixth album is impressionistic and emotionally charged, the result of an auteur refining his style and baring more of his soul than ever before.",
  },
  Ob: {
    links:
      "https://open.spotify.com/album/3w5Hok05AFjCLy269xXM7e?si=-6qW8bPURcyFtkDZCeHwQw",
    imageLinks: "On the beach.jpg",
    description: "loremwaefew",
  },
  A: {
    links:
      "https://open.spotify.com/album/21jUB9RqplD6OqtsTjKBnO?si=gFeyyqFiST63TufyK_62ng",
    imageLinks: "Animals.jpg",
    description:
      "One of Britain’s most successful and long lived avant-garde rock bands, Pink Floyd emerged relatively unsullied from the mire of mid-Sixties British psychedelic music as early experimenters with outer space concepts. Although that phase of the band’s development was of short duration, Pink Floyd have from that time been the pop scene’s preeminent techno-rockers: four musicians with a command of electronic instruments who wield an arsenal of sound effects with authority and finesse. While Pink Floyd’s albums were hardly hot tickets in the shops, they began to attract an enormous following through their US tours. They have more recently developed a musical style capable of sustaining their dazzling and potentially overwhelming sonic wizardry.",
  },
  O: {
    links:
      "https://open.spotify.com/album/3ADELRoZ4I8WLE7clLU7La?si=YXlFVZzSQSabGgS94Nk4-w",
    imageLinks: "O.jpg",
    description:
      "One of Britain’s most successful and long lived avant-garde rock bands, Pink Floyd emerged relatively unsullied from the mire of mid-Sixties British psychedelic music as early experimenters with outer space concepts. Although that phase of the band’s development was of short duration, Pink Floyd have from that time been the pop scene’s preeminent techno-rockers: four musicians with a command of electronic instruments who wield an arsenal of sound effects with authority and finesse. While Pink Floyd’s albums were hardly hot tickets in the shops, they began to attract an enormous following through their US tours. They have more recently developed a musical style capable of sustaining their dazzling and potentially overwhelming sonic wizardry.",
  },
};

document.body.addEventListener("click", (Event) => {
  if (Event.target.className === "cover") {
    open_win(covers[Event.target.alt].links);
  }
});

const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

function showSummary() {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
}

function hideSummary() {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
}

function random() {
  let keys = Object.keys(covers);
  let name = keys[Math.floor(Math.random() * keys.length)];
  return name;
}

function randomAlbum() {
  let key = random();
  overlay.classList.remove("hidden");
  randomTabCover.src = covers[key]["imageLinks"];
  descriptonItem.textContent = covers[key]["description"];
  randomCover.classList.remove("hidden");
  descriptonItem.classList.remove("hidden");
  modal.classList.add("hidden");
}

function hideRandom() {
  overlay.classList.add("hidden");
  randomCover.classList.add("hidden");
  descriptonItem.classList.add("hidden");
  if (modal.classList.contains("hidden") === false) {
    console.log(modal.classList.contains("hidden"));
    modal.classList.remove("hidden");
  }
}

const buttons = document.querySelectorAll(".button");
buttons[1].addEventListener("click", showSummary);
buttons[0].addEventListener("click", randomAlbum);

const closeModalButton = document.querySelector(".close-modal");
closeModalButton.addEventListener("click", hideSummary);

const randomCover = document.querySelector(".random");
overlay.addEventListener("click", hideRandom);

const randomTabCover = document.querySelector(".img");

const descriptonItem = document.querySelector(".description");
