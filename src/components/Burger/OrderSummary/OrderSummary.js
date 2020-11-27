import Button from '../../UI/Button/Button';

const orderSummary = props => {
	const ingredientSummary = Object.keys(props.ingredients).map(
		ingredientKey => {
			return (
				<li key={ingredientKey}>
					<span style={{ textTransform: 'capitalize' }}>{ingredientKey}</span>:
					{props.ingredients[ingredientKey]}
				</li>
			);
		}
	);

	// we want an li with name: quantity
	// we get the data as a js object, {{salad: 1}}

	return (
		<>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>{ingredientSummary}</ul>
			<p>
				<strong>Total Price: {props.price.toFixed(2)}</strong>
			</p>
			<p> Continue to checkout?</p>
			<Button btnType={'Danger'} clicked={props.purchaseCanceled}>
				CANCEL
			</Button>
			<Button btnType={'Success'} clicked={props.purchaseContinued}>
				CONTINUE
			</Button>
		</>
	);
};

export default orderSummary;
