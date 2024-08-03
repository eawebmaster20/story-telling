import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../../services/dataService/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-story-scene',
  standalone: true,
  imports: [],
  templateUrl: './story-scene.component.html',
  styleUrl: './story-scene.component.scss',
})
export class StorySceneComponent {
  constructor(private data: DataService, private router: Router) {
    // initialize audio
    this.audio = new Audio('../../../assets/soundTrack/knightSoundTrack.mp3');
  }
  ngAfterViewInit() {
    // display scene
    setTimeout(()=>{
      this.displayScene(
        this.data.selectedStory[this.data.storyTitle].scenes['initialScene']
      );

    },80)
  }
  ngOnInit(): void {
    // if audio is enabled then auto play when it ends
    this.audio.addEventListener('ended', () => {
      this.playNormal();
    });
    // sets volume icon
    this.iconToggle();
  }
  // audio functions here
  ismuted: boolean = false;
  volumeIcon = '';
  iconToggle() {
    if (this.ismuted) {
      this.volumeIcon = '../../../assets/icons/volume-mute.svg';
    } else {
      this.volumeIcon = '../../../assets/icons/volume-on.svg';
    }
  }
  // mute and unmute
  playSound() {
    this.ismuted = !this.ismuted;
    this.iconToggle();
    if (this.ismuted) {
      this.pauseAudio();
    } else {
      this.playAudio();
    }
  }
  playNormal() {
    this.audio.load();
    this.audio.play();
  }
  // play audio
  playAudio(): void {
    this.playNormal();
  }
  // pause audio
  pauseAudio(): void {
    this.audio.pause();
  }
  // audio function ends
  // query elements
  @ViewChild('choicesbtn') choices!: ElementRef;
  @ViewChild('nextbtn') next!: ElementRef;
  @ViewChild('storyText') storyText!: ElementRef;
  //  audio
  audio: any;
  // story variables
  sceneId: any;
  sceneImage: string = '';
  sceneTitle: string = '';
  sceneDescription: string = '';
  choiceA: string = '';
  choiceB: string = '';
  // story page count
  pageCount = 1;
  // choices count
  choicesCount = 0;
  // choices variables
  firstChoice: any = '';
  SecondChoice: any = '';
  choicesArray: any = [];
  // Main Menu route
  mainMenu() {
    this.router.navigate(['choose-story']);
  }
  // gsap animations implementation
  texts: string[] = [];
  currentIndex: number = -1;
  showNextText() {
    this.currentIndex = (this.currentIndex + 1) % this.texts.length;
    const newText = this.texts[this.currentIndex];
    this.animateTyping(newText);
  }
  animateTyping(text: string) {
    // cleans current text
    this.storyText.nativeElement.textContent = '';
    const gsap = (window as any).gsap;
    const TextPlugin = (window as any).TextPlugin;
    gsap.registerPlugin(TextPlugin);
    gsap.to(this.storyText.nativeElement, {
      duration: text.length * 0.01,
      text: text,
      ease: 'none',
    });
  }
  // story scene fetcher
  getSceneById(sceneID: any) {
    // fetch scene by id
    return this.data.selectedStory[this.data.storyTitle].scenes[sceneID];
    // return this.data.selectedStory["storyTitle"].scenes[sceneID];
  }
  // function to display story scene
  displayScene(scene: any) {
    // plays audio
    this.texts = []
    // this.storyText.nativeElement.textContent = ''
    // document.getElementById('storyTitle')!.innerText = ''
    // document.getElementById('storySelfText')!.innerText = 
    if (!this.ismuted) {
      this.audio.play();
    }
    //    displays scene infomation
    this.sceneTitle = scene.title;
    // this.sceneDescription = scene.description;
    this.texts = [scene.description];
    //  trigger gsap  animated text entrance
    this.showNextText();
    // check if the scene has an image
    if (scene.image) {
      // display the image
      this.sceneImage = scene.image;
    }
    // hides next button
    this.next.nativeElement.style.display = 'none';
    // check if the scene has decisions or choices
    if (scene.decisions.length > 0) {
      // display the choices(the choices are binded to the html template)
      this.choices.nativeElement.style.display = 'flex';
      this.sceneId = scene.id || null;
      this.choiceA = scene.decisions[0].text;
      this.choiceB = scene.decisions[1].text;
      this.firstChoice = scene.decisions[0].choice;
      this.SecondChoice = scene.decisions[1].choice;
    } else if (scene.nextScene) {
      // this means that the scene has no decisions or choices
      // show the next button
      this.choices.nativeElement.style.display = 'none';
      this.next.nativeElement.style.display = 'flex';
      //   call the navigateScene function with the nextSceneId
      this.next.nativeElement.onclick = () => this.navigateScene(scene.id);
    }
  }
  // //   navigate story scene function
  // // takes 2 argument. first is currentScene and second is choice or decision
  navigateScene(currentSceneId: any, choice = null) {
    // increase story page count
    this.pageCount++;
    // fetches the current scene from the story json
    const currentScene = this.getSceneById(currentSceneId);
    // if the current scene has no decisions and it has a nextScene
    // meaning the current scene dont use decision or choice
    if (!choice) {
      // assign the nextScene value to the nextSceneId
      const nextSceneId = currentScene.nextScene;
      //  if it not end then fetch the nextScene from the story json
      const nextScene = this.getSceneById(nextSceneId);
      //   and display the next scene
      this.displayScene(nextScene);
    }
    // but if the current scene has decisions (meaning choice is not null)
    else if (choice) {
      // increase choisecount
      this.choicesCount++;
      // fetch the decision from the current scene
      const decision = currentScene.decisions.find(
        (d: any) => d.choice === choice
      );
      //   if the decision is found then assign the nextScene value to the nextSceneId
      const nextSceneId = decision?.nextScene;
      if (nextSceneId === 'menu') {
        this.pauseAudio();
        this.mainMenu();
        this.router.navigate(['mini-map']);
        return;
      }
      if (nextSceneId === 'replay') {
        this.choicesCount = 0;
        this.pageCount = 0;
        this.displayScene(
          this.displayScene(
            this.data.selectedStory[this.data.storyTitle].scenes['initialScene']
          )
        );
        return;
      }
      // if it not end then fetch the nextScene from the story json
      const nextScene = this.getSceneById(nextSceneId);
      this.data.selectedChoices = [...this.data.selectedChoices, nextScene.title];

      //   and display the next scene
      this.displayScene(nextScene);
    }
  }
}
