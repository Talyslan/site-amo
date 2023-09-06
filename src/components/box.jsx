import BoxStyle from './box.module.css';

export function Box(props) {
    return (
        <div className={BoxStyle.box}>
            <img src={props.image} alt="Imagem ilustrativa" />
            <span>{props.texto}</span>
        </div>
    );
}