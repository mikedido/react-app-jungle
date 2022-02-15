function recommandation() {
    const currentMonth = new Date().getMonth();
    const isSpringSeason = (currentMonth >=2 && currentMonth <=5);

    if (isSpringSeason) {
        return  (<div>C'est le printemps, remporter</div>); 
    }

    return ( <div>Ce n'est pas le moment de remporter</div> );
}

export default recommandation;