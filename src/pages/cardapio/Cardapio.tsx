import LancheCard from "../../components/LancheCard/LancheCard";

const Cardapio = () => {
    return (
        <>
            <div className="products-display">
                <LancheCard
                    cardTitle="X-Burger"
                    image="https://tramp.com.br/wp-content/uploads/2025/09/Lanchonete-da-Cidade-X-Burguer_Mario-Rodrigues.jpg"
                    description="Delicious X-Burger with cheese and lettuce"
                    price="$10.00"
                    whereToGo="Order Now"
                /> 
                <LancheCard
                    cardTitle="X-Salada"
                    image="https://static.tapper.com.br/gallery/tenants/7e4e09e5-31af-44d5-bd1e-428319709832/6a868b45-ddf4-4a4f-b030-dd9172b363fb.jpg"
                    description="Fresh X-Salada with lettuce, tomato, and cheese"
                    price="$12.00"
                    whereToGo="Order Now"
                /> 
                <LancheCard
                    cardTitle="X-Frango"
                    image="https://www.paollarestaurante.com.br/uploads/images/2019/08/x-frango-1564805822.jpg"
                    description="Tasty X-Frango with grilled chicken and fresh vegetables"
                    price="$14.00"
                    whereToGo="Order Now"
                /> 
                <LancheCard
                    cardTitle="X-Bacon"
                    image="https://imagens.jotaja.com/produtos/8ef30e79-2acf-4007-aebc-f880bc868bbf.jpg"
                    description="Savory X-Bacon with crispy bacon and melted cheese"
                    price="$15.00"
                    whereToGo="Order Now"
                />
            </div>            
        </>
    )

};
export default Cardapio;