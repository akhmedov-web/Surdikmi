import React from 'react'

export default function Book() {
  return (
    <div className='w-100 px-3'>
      <div class="row g-2 mb-2 flex-column">
  <div class="col-md">
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInputGrid" placeholder="Tashkent, etc." />
      <label for="floatingInputGrid">From...</label>
    </div>
  </div>
  <div class="col-md">
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInputGrid" placeholder="Stockholm, etc." />
      <label for="floatingInputGrid">To...</label>
    </div>
  </div>
</div>
<div className="row g-2">
<div class="col-md">
    <div class="form-floating">
      <input type="date" className='form-control'/>
      <label for="floatingSelectGrid">Date</label>
    </div>
  </div>
<div class="col-md">
    <div class="form-floating">
      <select class="form-select" id="floatingSelectGrid">
        <option selected>Economy</option>
        <option value="1">Premium Economy</option>
        <option value="2">Business</option>
        <option value="3">Multiple</option>
      </select>
      <label for="floatingSelectGrid">Status</label>
    </div>
  </div>
</div>
<button className='btn btn-success w-50 d-block mx-auto mt-3'>Search flights <i class="bi bi-airplane ms-1"></i></button>
    </div>
  )
}
