export default function Logo({ index }){
  return(
    <>
    {
      index == 0 ?
        (<div>
          <h1 className="joshare__primary">jo</h1><h1 className="joshare__secondary">SHARE</h1>
         </div>) 
      : index == 1 ?
          (<div>
          <h1 className="alink">
           aLink!<span className="koma">.</span></h1>
         </div>) 
      : index == 2 ?
          (<div>
          <h1 className="jobin">jobin</h1>
         </div>)
      : index == 3 ?
          (<div>
          <h1>1337<span className="koma">x</span> API</h1>
         </div>)
      : null
    }
    </>
    )
}
