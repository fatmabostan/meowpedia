import React from "react";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import CheckboxField from "../components/CheckboxField";
interface CreateCatState {
  title: string;
  description: string;
  imgUrl: string;
  city: string;
  email: string;
}

class CreateCat extends React.Component<{}, CreateCatState> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: "",
      description: "",
      imgUrl: "",
      city: "",
      email: "",
    };
  }

  render() {
    const randomImg: number = Math.floor(Math.random() * 14) + 1;

    return (
      <div className="flex h-screen items-center justify-between ml-36">
        <div className="indicator border-black border-2 p-24 flex flex-col gap-4">
          <span className="indicator-item badge">Bilgileri Girin</span>
          <InputField
            type="text"
            placeholder="İlan Başlığı girin"
            label="Başlık"
          />

          <InputField
            type="text"
            placeholder="Görsel URL girin"
            label="Resim URL"
          />

          <InputField type="text" placeholder="Şehir girin" label="Şehir" />

          <InputField
            type="number"
            placeholder="Kedi yaşını girin"
            label="Yaş"
          />

          <SelectField
            label="Cinsiyet"
            placeholder="Kedi cinsiyetini seçin"
            options={[
              { value: "male", label: "Erkek" },
              { value: "female", label: "Dişi" },
            ]}
          />

          <CheckboxField label="Aşılı mı?" options={["Evet", "Hayır"]} />

          <CheckboxField label="Kısırlaştırılmış mı?" options={["Evet", "Hayır"]} />

          <InputField type="text" placeholder="Irkını girin" label="Irk" />

          <InputField
            type="text"
            placeholder="Kedi rengini girin"
            label="Renk"
          />

          <InputField
            type="text"
            placeholder="Kedinin kişiliğini yazın (ör. Sevecen, Oyunbaz)"
            label="Kişilik"
          />

          <InputField
            type="text"
            placeholder="Sağlık durumunu belirtin (ör. Sağlıklı, Özel Bakım Gerekiyor)"
            label="Sağlık Durumu"
          />

          <InputField
            type="text"
            placeholder="Sahiplendirme koşullarını belirtin"
            label="Sahiplendirme Koşulları"
          />
        </div>
        <div className="h-full w-1/2 bg-contain bg-center bg-opacity-55" style={{backgroundImage: `url(../src/assets/images/img-${randomImg}.jpg)`}}></div>
      </div>
    );
  }
}

export default CreateCat;
