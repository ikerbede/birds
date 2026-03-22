export interface BirdAttribute {
  id_attribut: number;
  cd_ref: number;
  valeur_attribut: string;
  nom_attribut: string;
  label_attribut: string;
  liste_valeur_attribut: string;
  obligatoire: boolean;
  desc_attribut: string;
  type_attribut: string;
  type_widget: string;
  regne: string | null;
  group2_inpn: string | null;
  id_theme: number;
  ordre: number;
  nom_theme: string;
}

export interface BirdMedia {
  id_media: number;
  cd_ref: number;
  titre: string;
  url: string;
  chemin: string | null;
  auteur: string;
  desc_media: string | null;
  source: string;
  licence: string | null;
  is_public: boolean;
  supprime: boolean;
  id_type: number;
  nom_type_media: string;
  desc_type_media: string;
}

export interface BirdDetailsResponse {
  attributs: BirdAttribute[];
  medias: BirdMedia[];
}
