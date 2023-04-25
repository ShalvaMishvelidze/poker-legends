import { SmallerWarningMessage } from './SmallerWarningMessage';
import { WarningMessage } from './WarningMessage';
import { Prizes } from './Prizes';
import { CashGamesLeaderboard } from './CashGamesLeaderboard';
import React from 'react';

const CashGames = () => {
	return (
		<>
			<section className="section-cash-games">
				<div className="section-cash-games__heading u-position-relative">
					<div className="u-trapez-top"></div>
					<p className="heading-primary">1₾ რეიქი = 1 ქულას</p>
				</div>
				<CashGamesLeaderboard />
				<Prizes />
				<CashGamesLeaderboard />
				<Prizes />
				<SmallerWarningMessage />
			</section>
			<WarningMessage />
		</>
	);
};

export default CashGames;
