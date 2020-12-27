import { Injectable } from '@angular/core';
import {Dog} from '../../model/Dog';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsDataService {

  private dogs: Array<Dog>;

  getDogs(): Observable<Array<Dog>> {
    return of(this.dogs);
  }

  updateDog(dog: Dog): Observable<Dog> {
    const originalDog = this.dogs.find(d => d.id === dog.id);
    originalDog.details = dog.details;
    originalDog.race = dog.race;
    originalDog.weight = dog.weight;
    originalDog.size = dog.size;
    originalDog.color = dog.color;
    return of(originalDog);
  }

  constructor() {
    this.dogs = new Array<Dog>();

    const dog1 = new Dog();
    dog1.id = 1;
    dog1.race = 'Shi-Tzu';
    dog1.color = 'White';
    dog1.size = 'Small';
    dog1.weight = 7;
    dog1.details = 'The Shih Tzu is a sturdy, lively, alert toy dog with long flowing double coat. Befitting his noble Chinese ancestry as a highly valued, prized companion and palace pet, the Shih Tzu is proud of bearing, has a distinctively arrogant carriage with head well up and tail curved over the back';

    const dog2 = new Dog();
    dog2.id = 2;
    dog2.race = 'Akita-inu';
    dog2.color = 'Orange-White';
    dog2.size = 'Big';
    dog2.weight = 25;
    dog2.details = 'The Akita is a bold and willful dog, naturally wary of strangers but extremely loyal to their family. They are alert, intelligent, and courageous. They tend to be aggressive toward other dogs, especially those of the same sex. ... With family, the Akita is affectionate and playful.';

    const dog3 = new Dog();
    dog3.id = 3;
    dog3.race = 'German Shepherd';
    dog3.color = 'Brown-Black';
    dog3.size = 'Big';
    dog3.weight = 30;
    dog3.details = 'The German shepherd dog is a herding breed known for its courage, loyalty and guarding instincts. This breed makes an excellent guard dog, police dog, military dog, guide dog for the blind and search and rescue dog. For many families, the German shepherd is also a treasured family pet.';

    const dog4 = new Dog();
    dog4.id = 4;
    dog4.race = 'Labrador';
    dog4.color = 'Gold';
    dog4.size = 'Big';
    dog4.weight = 33;
    dog4.details = 'The most distinguishing characteristics of the Labrador Retriever are its short, dense, weather resistant coat; an “otter” tail; a clean-cut head with broad back skull and moderate stop; powerful jaws; and its “kind,” friendly eyes, expressing character, intelligence and good temperament.';

    const dog5 = new Dog();
    dog5.id = 5;
    dog5.race = 'Shelty';
    dog5.color = 'White-Brown';
    dog5.size = 'Medium';
    dog5.weight = 11;
    dog5.details = 'The Shetland Sheepdog, also known as the Sheltie, is an extremely intelligent, quick, and obedient herder from Scotland\'s remote and rugged Shetland Islands. Shelties bear a strong family resemblance to their bigger cousin, the Collie.';

    this.dogs.push(dog1);
    this.dogs.push(dog2);
    this.dogs.push(dog3);
    this.dogs.push(dog4);
    this.dogs.push(dog5);
  }

}
