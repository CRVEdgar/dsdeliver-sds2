import { formatPrice } from "./helpers";

type Props ={
    amount: number;
    totalPrice: number;
}

function OrderSummary({amount , totalPrice }: Props){
    return (
        <div className="order-summary-container">
            <div className="order-summary-content">
              <div>
                <span className="amount-selected-container">
                    <strong className="amount-selected">{amount}</strong>
                    PEDIDO(s) SELECIONADO(s)
                </span>  
                <span className="order-summary-total">
                    <strong className="amount-selected">
                        {formatPrice(totalPrice)}
                    </strong>
                    VALOR TOTAL
                </span>
              </div>
              <button className="order-summary-make-order">
                  <strong>ENVIAR PEDIDO</strong>
              </button>
            </div>
        </div>
    )
}

export default OrderSummary;