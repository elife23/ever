import React from 'react'

type Props = {}

function MyVisioconference({ }: Props) {
  return (
    <>
      <div className="flex flex-col py-1 px-1">
        <div className="navbar bg-white mb-2 rounded-md">

          <div className="navbar-end">
            <button className="btn bg-primary text-white hover:bg-primary" onClick={() => document.getElementById('meet_modal').showModal()}>open modal</button>
            <dialog id="meet_modal" className="modal backdrop-blur-sm">
              <div className="modal-box">
                {/* modal content */}
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click outside to close</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyVisioconference