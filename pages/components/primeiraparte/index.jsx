import style from  './Home.module.css'
/* Devera Ter uma Breve apresentacao do Aprenda A parte maior deve ter letras transparentes 
apenas com o contorno aparecendo ocupara 1/4 da Pagina acho legal colocar animacoes*/
export default function App(){
    return(
        <div>
        <div> {/*  Contorno*/}
        <h1 style={style.contorno}>Aprenda Com o Aprenda.APP</h1>
        </div>
        <h2>O Site que te Ajuda Com as suas necessidades estudantis</h2>
        </div>

    )
}