# crowdSAFU
Platform for Crowdsourcing Blockchain (Public Ledger) Address Reputations  
PoC for Binance Hackathon 2019  
**Awarded 'Most Creative Product'**

## How does this work?
CrowdSAFU combines different silos of public address reputation through economic incentives (described below)

## Three types of stakeholders
### 1. Submitters
* Submitters are individuals who stake some cryptocurrency to submit the ['taint' value](https://bitcoin.stackexchange.com/questions/7966/what-are-tainted-coins-exactly) of an address. The initial stake provides liquidity for the trading market for the contributors. This stake will be slashed if a dispute is raised in the end and the arbitrators decide against the submitter's favour.

### 2. Contributers
* Contributors are presented an exchange-like interface where they go long/short on the taint value of an address. 
    * Long - traders believe that the taint value of an address is higher than it should be trading currently
    * Short - traders believe that taint value of address is lower than it should be trading currently 
* Upon resolution of the address after two weeks of trading, the initial submission will be revealed and the 'winners' will receive the liquidated shares of the 'losers' proportionally to the shares that each winner has bought.

### 3. Queriers
* Upon resolution, the data will be stored in a database. This database can be provided (at a fee) to people who need the data
Eg. Exchanges, Financial Institutions, Individuals who transact frequently etc.

## Possible Extensions
Chrome extension to allow submitters to submit more easily and queriers to request data more easily

## Need Clarification? Contact Us:
* Derek Chin [Github](github.com/derekzx), [Twitter - derekzx](twitter.com/derekzx), Email: [chinzhixian@gmail.com]( mailto:chinzhixian@gmail.com)
* Ken Chan [Twitter - kenchangh](twitter.com/kenchangh)
