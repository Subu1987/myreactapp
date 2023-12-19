function Data(){

    let avengers=[
        {name:"Thor",planet:"Asgard",age:1500},
        {name:"Thanos",planet:"Titan",age:1000},
        {name:"Grandmaster",planet:"Shakar",age:2000}
    ]

    return(
        <div>
            <h1>Displaying Data</h1>

            {
                avengers.map((avenger,index)=>{

                    return(
                        <div className="avg" key={index}>
                            
                            <p>{avenger.name}</p>
                            <p>{avenger.planet}</p>
                            <p>{avenger.age}</p>

                        </div>
                    )

                })
            }

        </div>
    )

}

export default Data;