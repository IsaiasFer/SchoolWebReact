import React from "react";
import "../styles/photoStyles.scss";

function Photo(props) {
  return (
    <figure>
      <img src={props.link} alt="" />
    </figure>
  );
}

function OldPhotos(props) {
  if (!props.Old_Open) {
    return null;
  }
  return (
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
  );
}

function Photos2021(props) {
  if (!props._2021_Open) {
    return null;
  }
  return (
    <section className="photos">
      <Photo link="https://imgur.com/arVLCHM.png" />
      <Photo link="https://imgur.com/dHfhWlR.png" />
      <Photo link="https://imgur.com/6OPfqaF.png" />
      <Photo link="https://imgur.com/dPw4ofH.png" />
      <Photo link="https://imgur.com/AE1gWj7.png" />
      <Photo link="https://imgur.com/E02ZGOt.png" />
      <Photo link="https://imgur.com/UDLWDsX.png" />
      <Photo link="https://imgur.com/QOlNv7D.png" />
      <Photo link="https://imgur.com/8nbjF7O.png" />
    </section>
  );
}

function Photos2022(props) {
  if (!props._2022_Open) {
    return null;
  }
  return (
    <section className="photos">
      <Photo link="https://imgur.com/ufRCDXf.jpg" />
      <Photo link="https://imgur.com/kC8aF6m.jpg" />
      <Photo link="https://imgur.com/7GFDtTE.jpg" />
      <Photo link="https://imgur.com/LstwOib.jpg" />
      <Photo link="https://imgur.com/ouZA2Ne.jpg" />
      <Photo link="https://imgur.com/e01bACj.jpg" />
      <Photo link="https://imgur.com/fYuEBki.jpg" />
    </section>
  );
}
function Promo22(props) {
  if (!props.promo22) {
    return null;
  }
  return (
    <section className="photos">
      <Photo link="https://i.imgur.com/9o6Xmcz.jpg" />
      <Photo link="https://i.imgur.com/2y8rqnX.jpg" />
      <Photo link="https://i.imgur.com/IAc3flh.jpg" />
      <Photo link="https://i.imgur.com/36iZmmw.jpg" />
    </section>
  );
}
function TrabInt(props) {
  if (!props.trabInt) {
    return null;
  }
  return (
    <section className="photos">
      <Photo link="https://i.imgur.com/xjIBHBf.jpg" />
      <Photo link="https://i.imgur.com/urRvQ57.jpg" />
      <Photo link="https://i.imgur.com/2pZnty2.jpg" />
      <Photo link="https://i.imgur.com/k2lk3gM.jpg" />
      <Photo link="https://i.imgur.com/b12U077.jpg" />
      <Photo link="https://i.imgur.com/MxK0yl7.jpg" />
      <Photo link="https://i.imgur.com/nIUWy3D.jpg" />
      <Photo link="https://i.imgur.com/0Jebvtb.jpg" />
      <Photo link="https://i.imgur.com/WJjidhm.jpg" />
      <Photo link="https://i.imgur.com/5mabYik.jpg" />
      <Photo link="https://i.imgur.com/o4J4dWW.jpg" />
      <Photo link="https://i.imgur.com/csekzTv.jpg" />
    </section>
  );
}
function AdqInv(props) {
  if (!props.adqInv) {
    return null;
  }
  return (
    <section className="photos">
      <Photo link="https://i.imgur.com/2JmuXKk.jpg" />
      <Photo link="https://i.imgur.com/X8gmXsT.jpg" />
      <Photo link="https://i.imgur.com/TXX2WJA.jpg" />
      <Photo link="https://i.imgur.com/pwovfj9.jpg" />
      <Photo link="https://i.imgur.com/dlbx8Uc.jpg" />
      <Photo link="https://i.imgur.com/I2CZS8o.jpg" />
      <Photo link="https://i.imgur.com/bsGIhZe.jpg" />
      <Photo link="https://i.imgur.com/g3JUmko.jpg" />
      <Photo link="https://i.imgur.com/aJF7k49.jpg" />
    </section>
  );
}
function Actev(props) {
  if (!props.actev) {
    return null;
  }
  return (
    <section className="photos">
      <Photo link="https://i.imgur.com/1UO2Vjr.jpg" />
      <Photo link="https://i.imgur.com/Vwtjsav.jpg" />
      <Photo link="https://i.imgur.com/sPluoLF.jpg" />
      <Photo link="https://i.imgur.com/fDAyU99.jpg" />
      <Photo link="https://i.imgur.com/tvfDaWm.jpg" />
      <Photo link="https://i.imgur.com/BPRc1Eq.jpg" />
      <Photo link="https://i.imgur.com/E57njJe.jpg" />
      <Photo link="https://i.imgur.com/HjPoUf7.jpg" />
      <Photo link="https://i.imgur.com/u9SSfWa.jpg" />
      <Photo link="https://i.imgur.com/KfYz1l9.jpg" />
      <Photo link="https://i.imgur.com/o9pJeoP.jpg" />
      <Photo link="https://i.imgur.com/8SUPlzy.jpg" />
      <Photo link="https://i.imgur.com/4bCoFgZ.jpg" />
      <Photo link="https://i.imgur.com/D9ocnaZ.jpg" />
      <Photo link="https://i.imgur.com/R2L3Fh5.jpg" />
      <Photo link="https://i.imgur.com/btDV25m.jpg" />
      <Photo link="https://i.imgur.com/IPmMpOK.jpg" />
      <Photo link="https://i.imgur.com/IFgpcj7.jpg" />
      <Photo link="https://i.imgur.com/wpXCm7y.jpg" />
      <Photo link="https://i.imgur.com/xJW1cZk.jpg" />
      <Photo link="https://i.imgur.com/qxQR3cN.jpg" />
      <Photo link="https://i.imgur.com/15QqcQB.jpg" />
      <Photo link="https://i.imgur.com/HIAsG12.jpg" />
      <Photo link="https://i.imgur.com/AX6JJoR.jpg" />
      <Photo link="https://i.imgur.com/7d7AyFk.jpg" />
      <Photo link="https://i.imgur.com/X8rT3Fc.jpg" />
      <Photo link="https://i.imgur.com/qRWNDAb.jpg" />
      <Photo link="https://i.imgur.com/7vPuXiW.jpg" />
      <Photo link="https://i.imgur.com/rdG1jRK.jpg" />
    </section>
  );
}

class PhotosContent extends React.Component {
  state = {
    Old_Open: false,
    _2021_Open: false,
    _2022_Open: false,
    promo22: false,
    adqInv: false,
    trabInt: false,
    actev: false,
  };

  active_OldPhotos = () => {
    this.setState({ Old_Open: true });
    this.setState({ _2021_Open: false });
    this.setState({ _2022_Open: false });
    this.setState({ promo22: false });
  };
  activePhotos2021 = () => {
    this.setState({ _2021_Open: true });
    this.setState({
      Old_Open: false,
      _2022_Open: false,
      promo22: false,
      adqInv: false,
      trabInt: false,
      actev: false,
    });
  };
  activePhotos2022 = () => {
    this.setState({ _2022_Open: true });
    this.setState({
      Old_Open: false,
      _2021_Open: false,
      promo22: false,
      actev: false,
      adqInv: false,
      trabInt: false,
    });
  };
  activePromo2022 = () => {
    this.setState({ promo22: true });
    this.setState({
      Old_Open: false,
      _2021_Open: false,
      _2022_Open: false,
      trabInt: false,
      adqInv: false,
      actev: false,
    });
  };
  activeActev = () => {
    this.setState({ actev: true });
    this.setState({
      Old_Open: false,
      _2021_Open: false,
      _2022_Open: false,
      promo22: false,
      adqInv: false,
      trabInt: false,
    });
  };
  activeTrabInt = () => {
    this.setState({ trabInt: true });
    this.setState({
      Old_Open: false,
      _2021_Open: false,
      _2022_Open: false,
      promo22: false,
      adqInv: false,
      actev:false,
    });
  };
  activeAdqInv = () => {
    this.setState({ adqInv: true });
    this.setState({
      Old_Open: false,
      _2021_Open: false,
      _2022_Open: false,
      promo22: false,
      trabInt: false,
      actev: false,
    });
  };
  render() {
    return (
      <section className="content">
        <h1 className="pageTitle">Galería de Fotos</h1>
        <div className="btnPhotosContent">
          <button onClick={this.active_OldPhotos}>Fotos memorables</button>
          <button onClick={this.activePhotos2021}>Ciclo 2021</button>
          <button onClick={this.activePhotos2022}>Ciclo 2022</button>
          {/* <button onClick={this.activePromo2022}>Promo 22</button> */}
          <button onClick={this.activeActev}>Actos y Eventos</button>
          <button onClick={this.activeAdqInv}>Adquisiciones e Inversiones</button>
          <button onClick={this.activeTrabInt}>Acciones de trabajo e Integración Institucional </button>
          <br />
        </div>
        <OldPhotos Old_Open={this.state.Old_Open} />
        <Photos2021 _2021_Open={this.state._2021_Open} />
        <Photos2022 _2022_Open={this.state._2022_Open} />
        <Promo22 promo22={this.state.promo22} />
        <TrabInt trabInt={this.state.trabInt} />
        <Actev actev={this.state.actev} />
        <AdqInv adqInv={this.state.adqInv} />
      </section>
    );
  }
}

export default PhotosContent;
