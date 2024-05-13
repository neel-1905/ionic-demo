import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from "@capacitor/camera";
import { useState } from "react";
import { UserPhoto } from "../types/UserPhoto";

export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const fileName = Date.now() + ".jpeg";
    const newPhotos = [
      {
        filepath: fileName,
        webviewPath: photo.webPath,
      },
      ...photos,
    ];
    setPhotos(newPhotos);
  };

  return {
    takePhoto,
    photos,
  };
}
