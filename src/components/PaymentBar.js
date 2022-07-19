import {
	CashPayment,
} from "../assets/images";
import { generateIds } from '../api/transaction';

import { Link } from 'react-router-dom';

import { useEffect, useLocation } from 'react';
import { useTranslation } from 'react-i18next';

function PaymentBar({ total, total_discount, total_taxes }) {
	const { t } = useTranslation();
	return (
		<div className="col-12">
			<div className="row g-0">
				<div className="col-lg-5"></div>
				<div className="col-lg-2 grand-total">
				{t("total-discount")} <span className="discount_value">AED {total_discount}</span>
				</div>
				<div className="col-lg-1 grand-total">
				{t("total-tax")} <span>AED {total_taxes}</span>
				</div>
				<div className="col-lg-2 text-center grand-total">
					{t("total-ammount-to-pay")} <span>AED {total}</span>
				</div>
				<div className="col-lg-2 text-right action-button">
					<button>{t("cancel")}</button>
					<button className="pay-now">
					<Link to="/payments">
						<img  src={CashPayment} alt="Cash" width="20px" />
						{t("pay")}</Link>
					</button>
				</div>
			</div> 
		</div>
	);
}

export default PaymentBar;
