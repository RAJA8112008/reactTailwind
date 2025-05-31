function Tours({tours}){
return(
    <div>
        <div>
        <h2>Plan with Love</h2>
        </div>
   <div>
    {
        tours.map((tours)=>{
            return <card{...tours}></card>
        })
    }
   </div>
   </div>
)
}
 export default Tours;