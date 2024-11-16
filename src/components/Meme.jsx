function Meme() {

    return (
      <>
        <main>
            <form className="form">
                <input 
                    type="text"
                    placeholder="Shut up"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="And take my money"
                    className="form--input"
                />
                <button 
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </form>
        </main>
      </>
    )
  }

  export default Meme