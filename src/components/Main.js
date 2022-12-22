function ShowImage({data}){

      return(

        <div className="column">
            <img className="img" src={data[0].img} alt="" />
            <img className="img" src={data[1].img} alt="" />
            <img className="img" src={data[2].img} alt="" />
            <img className="img" src={data[2].img} alt="" />
            <img src={data[3].img} alt="" />
      </div>
      )

}
export default ShowImage