import {Injectable} from "@angular/core";
import {FaceSnap} from "../models/face-snap.models";

@Injectable({
  providedIn: 'root'
  }
)
export class FaceSnapsService{
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: "El mouenssa zarzis",
      description: "Le coeur de la vielle ville.",
      imageUrl: "https://scontent.ftun15-1.fna.fbcdn.net/v/t1.6435-9/95141535_1369194289939937_9008536303830040576_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=cXqP_2vP7HsAX_lB2Kl&_nc_ht=scontent.ftun15-1.fna&oh=00_AT9eramMKD7bglbKI4lJHgadajUkOeoOfdOhHY8X1CSY9g&oe=630758F7",
      createdDate: new Date(),
      snaps: 5000000,
      location: "Zarzis, Tunisia"
    },
    {
      id: 2,
      title: "Hessi jerbi ",
      description: "Un des plus beau spot de toute la tunisie.",
      imageUrl: "https://imgs.search.brave.com/VcA2Oi6s4nhLnvmZLyn0mMVlAU5rXpTe0gnI2HxxLcM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jYXJ0/aGFnZW1hZ2F6aW5l/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wOC9aYXJ6/aXMuanBn",
      createdDate: new Date(),
      snaps: 10000,
      location : "Zarzis, Tunisia"
    },
    {
      id: 3,
      title: "Les oliviers",
      description: "L'arbre dont les zarzisiens puisent leur force!",
      imageUrl: "https://imgs.search.brave.com/P7n_URlzD07E1YVNNy8nPPSHBKrl_Q74rH5IJOir7jw/rs:fit:628:418:1/g:ce/aHR0cHM6Ly93d3cu/ZXNwYWNlbWFuYWdl/ci5jb20vc2l0ZXMv/ZGVmYXVsdC9maWxl/cy9maWVsZC9pbWFn/ZS96aXR0eml0b3Vu/LmpwZw",
      createdDate: new Date(),
      snaps: 25000000
    },
    {
      id: 4,
      title: "El mouenssa zarzis",
      description: "Le coeur de la vielle ville.",
      imageUrl: "https://scontent.ftun15-1.fna.fbcdn.net/v/t1.6435-9/95141535_1369194289939937_9008536303830040576_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=cXqP_2vP7HsAX_lB2Kl&_nc_ht=scontent.ftun15-1.fna&oh=00_AT9eramMKD7bglbKI4lJHgadajUkOeoOfdOhHY8X1CSY9g&oe=630758F7",
      createdDate: new Date(),
      snaps: 5000000,
      location: "Zarzis, Tunisia"
    },
    {
      id: 5,
      title: "Hessi jerbi ",
      description: "Un des plus beau spot de toute la tunisie.",
      imageUrl: "https://imgs.search.brave.com/VcA2Oi6s4nhLnvmZLyn0mMVlAU5rXpTe0gnI2HxxLcM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jYXJ0/aGFnZW1hZ2F6aW5l/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wOC9aYXJ6/aXMuanBn",
      createdDate: new Date(),
      snaps: 10000,
      location : "Zarzis, Tunisia"
    },
    {
      id: 6,
      title: "Les oliviers",
      description: "L'arbre dont les zarzisiens puisent leur force!",
      imageUrl: "https://imgs.search.brave.com/P7n_URlzD07E1YVNNy8nPPSHBKrl_Q74rH5IJOir7jw/rs:fit:628:418:1/g:ce/aHR0cHM6Ly93d3cu/ZXNwYWNlbWFuYWdl/ci5jb20vc2l0ZXMv/ZGVmYXVsdC9maWxl/cy9maWVsZC9pbWFn/ZS96aXR0eml0b3Vu/LmpwZw",
      createdDate: new Date(),
      snaps: 25000000
    }
  ];
  getAllFaceSnaps(): FaceSnap[]{
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap{
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id ===faceSnapId);
    if (!faceSnap){
      throw new Error("FaceSnap not fouind!");
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId:number, snapType: 'snap' | 'unsnap'): void{
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

}
