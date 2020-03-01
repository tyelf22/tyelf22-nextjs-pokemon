const Navbar = () => (
    <div>
        <div className="header">
            <h1>Original Pokemon</h1>
            <p>Application to view and search Pokemon</p>
        </div>
        <div className="coa">
            <button>RANDOM</button>
            <input type="text" placeholder="Search"/>
        </div>


        <style jsx>{`
        
        .header{
            font-family: 'Oxanium', helvetica;
            text-align: center;
        }

        .coa {
            text-align: center;
        }

        button {
            padding: 10px;
            width: 200px;
            border-radius: 10px;
            border: none;
            margin: 0 10px;
        }

        input {
            margin 0 10px;
            padding: 10px;
            border-radius: 10px;
        }
        

        `}</style>
    </div>
)

export default Navbar