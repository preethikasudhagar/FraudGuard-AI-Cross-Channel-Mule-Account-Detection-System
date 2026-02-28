export default function Login() {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
      <div className="card" style={{width:400}}>
        <h2>Login</h2>
        <input placeholder="Email" style={{width:"100%",padding:10,marginBottom:10}}/>
        <input type="password" placeholder="Password" style={{width:"100%",padding:10}}/>
        <button style={{width:"100%",padding:12,marginTop:20,background:"#3b82f6",color:"white",borderRadius:10}}>
          Login
        </button>
      </div>
    </div>
  );
}