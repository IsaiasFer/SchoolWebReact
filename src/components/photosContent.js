import React from 'react';

function Photo(props) {
  return (
    <figure>
      <img src={props.link} />
    </figure>
  );
}

class PhotosContent extends React.Component {
  render() {
    this.handleClick = () => {};
    return (
      <section className="content">
        <h1 className="pageTitle">Galería de Fotos</h1>
        <section className="photos">
          <Photo link="https://i.imgur.com/KooRsjQ.png" />
          <Photo link="https://i.imgur.com/wTxDn7M.png" />
          <Photo link="https://i.imgur.com/5V0D1dv.png" />
          <Photo link="https://i.imgur.com/N8jUxhr.png" />
          <Photo link="https://i.imgur.com/b9cwL6k.png" />
          <Photo link="https://i.imgur.com/RRUs0WA.png" />
          <Photo link="https://i.imgur.com/fmofTua.png" />
          <Photo link="https://i.imgur.com/wXgMUq6.png" />
          <Photo link="https://i.imgur.com/vFq1AiE.png" />
          <Photo link="https://i.imgur.com/kyeq18U.png" />
          <Photo link="https://i.imgur.com/5WwBIkl.png" />
          <Photo link="https://i.imgur.com/XSS12PW.png" />
          <Photo link="https://i.imgur.com/tExDeBP.png" />
          <Photo link="https://i.imgur.com/kfxXjdo.png" />
          <Photo link="https://i.imgur.com/xU7WUgt.png" />
          <Photo link="https://i.imgur.com/TlcXA7o.png" />
          <Photo link="https://i.imgur.com/86Kz0zz.png" />
          <Photo link="https://i.imgur.com/FWqLxAv.png" />
          <Photo link="https://i.imgur.com/gqS7F9m.png" />
          <Photo link="https://i.imgur.com/qW7wXNH.png" />
          <Photo link="https://i.imgur.com/8xLnEmA.png" />
          <Photo link="https://i.imgur.com/r44D57u.png" />
          <Photo link="https://i.imgur.com/lrVV0hX.png" />
          <Photo link="https://i.imgur.com/I96b6OL.png" />
          <Photo link="https://i.imgur.com/8jBYVN8.png" />
          <Photo link="https://i.imgur.com/AeXJJaO.png" />
          <Photo link="https://i.imgur.com/x56R9Do.png" />
          <Photo link="https://i.imgur.com/hDH4IXB.png" />
          <Photo link="https://i.imgur.com/3y9faq1.png" />
          <Photo link="https://i.imgur.com/XHgQppN.png" />
          <Photo link="https://i.imgur.com/WJ8qnak.png" />
          <Photo link="https://i.imgur.com/5esPZul.png" />
          <Photo link="https://i.imgur.com/SjYcnDY.png" />
          <Photo link="https://i.imgur.com/2Ia0Utp.png" />
          <Photo link="https://i.imgur.com/wkINGj3.png" />
          <Photo link="https://i.imgur.com/aTohOyD.png" />
          <Photo link="https://i.imgur.com/4lznbhL.png" />
          <Photo link="https://i.imgur.com/AzsMEnq.png" />
          <Photo link="https://i.imgur.com/mbG2gwe.png" />
          <Photo link="https://i.imgur.com/1fiGWRP.png" />
          <Photo link="https://i.imgur.com/nb0ROMF.png" />
          <Photo link="https://i.imgur.com/ZWpkWaP.png" />
          <Photo link="https://i.imgur.com/JLTvM7B.png" />
          <Photo link="https://i.imgur.com/mw3rHRz.png" />
          <Photo link="https://i.imgur.com/JU5VthO.png" />
          <Photo link="https://i.imgur.com/1oYeFa3.png" />
          <Photo link="https://i.imgur.com/6VDN9AA.png" />
          <Photo link="https://i.imgur.com/FMZXr8W.png" />
          <Photo link="https://i.imgur.com/HmbRNAT.png" />
          <Photo link="https://i.imgur.com/9vFAHtV.png" />
          <Photo link="https://i.imgur.com/cqanC7n.png" />
          <Photo link="https://i.imgur.com/syMAj2n.png" />
          <Photo link="https://i.imgur.com/dCrMhge.png" />
          <Photo link="https://i.imgur.com/B3BjCSM.png" />
          <Photo link="https://i.imgur.com/TOKPTVF.png" />
          <Photo link="https://i.imgur.com/vqETean.png" />
          <Photo link="https://i.imgur.com/yXtgPk8.png" />
          <Photo link="https://i.imgur.com/rcGz0tG.png" />
          <Photo link="https://i.imgur.com/eDdckbY.png" />
          <Photo link="https://i.imgur.com/RHyNOod.png" />
          <Photo link="https://i.imgur.com/rR1ffhL.png" />
          <Photo link="https://i.imgur.com/kEsk5N6.png" />
          <Photo link="https://i.imgur.com/NCbkSXO.png" />
          <Photo link="https://i.imgur.com/SavrbYJ.png" />
          <Photo link="https://i.imgur.com/Ek5Jl9S.png" />
          <Photo link="https://i.imgur.com/2t9Qpa1.png" />
          <Photo link="https://i.imgur.com/JzJfrAs.png" />
          <Photo link="https://i.imgur.com/Ho01bTB.png" />
          <Photo link="https://i.imgur.com/HjDYnNT.png" />
          {/* <!-- logos --> */}
          <Photo link="https://i.imgur.com/Y7wzO1y.png" />
          <Photo link="https://i.imgur.com/ocfPYOF.png" />
          <Photo link="https://i.imgur.com/EMq2eNp.png" />
          <Photo link="https://i.imgur.com/JVJ9VA3.png" />
          <Photo link="https://i.imgur.com/IHFOFkp.png" />
        </section>
      </section>
    );
  }
}

export default PhotosContent;
