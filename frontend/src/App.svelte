<!--<script ✂prettier:content✂="CiAgZXhwb3J0IGxldCBuYW1lOwo=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=">{}</script><main>
  <h1>Hall0 {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main><style ✂prettier:content✂="CiAgbWFpbiB7CiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICBwYWRkaW5nOiAxZW07CiAgICBtYXgtd2lkdGg6IDI0MHB4OwogICAgbWFyZ2luOiAwIGF1dG87CiAgfQoKICBoMSB7CiAgICBjb2xvcjogI2ZmM2UwMDsKICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7CiAgICBmb250LXNpemU6IDRlbTsKICAgIGZvbnQtd2VpZ2h0OiAxMDA7CiAgfQoKICBAbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHsKICAgIG1haW4gewogICAgICBtYXgtd2lkdGg6IG5vbmU7CiAgICB9CiAgfQo=" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂=""></style>-->
<script>
  // function showIMWobj() {
  //   fetch('http://localhost:3000/imwObj', {
  //     method: 'GET',
  //     mode: 'no-cors',
  //     // body: 'wtf',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((res) => {
  //       // if (!res.ok) {
  //       //   throw new Error('Failed!');
  //       // }
  //       alert('someWorkzingx!');
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  async function showIMWobj() {
    let url = 'http://localhost:3333/imwObj';
    let response = await fetch(url);

    let result = await response.json(); // read response body and parse as JSON

    console.log(`JSON.stringify(result)==> ${JSON.stringify(result)}`);
  }

  async function vInvMasterQuery() {
    let url = 'http://localhost:3333/tsqlHub/queryInvMasterTable';
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
      },
      body: JSON.stringify(),
    });

    let result = await response; // read response body and parse as JSON

    console.log(`result==> ${result}`);
    console.log(`result.length==> ${result.length}`);
    console.log(`typeof result==> ${typeof result}`);
    console.log(`JSON.stringify(result)==> ${JSON.stringify(result)}`);
  }
</script>

<button on:click={showIMWobj}>showIMWobj</button>

<div style="display:block">
  <form
    id="queryInvMasterTable"
    action="http://localhost:3333/tsqlHub/queryInvMasterTable"
    method="POST"
    accept-charset="UTF-8"
    style="display:block"
  >
    <div style="display:block">
      <label for="query">Enter Query for Catapult v_InventoryMaster</label>
      <textarea id="query" name="tblQryPost" cols="30" rows="1" wrap="soft">
        SELECT INV_PK, INV_CPK, INV_ScanCode, ORD_SupplierStockNumber, INV_Name,
        INV_Size, INV_ReceiptAlias, inv_default, convert(varchar(10),
        POS_TimeStamp, 120), INV_DateCreated, INV_EMP_FK_CreatedBy,
        ord_quantityinorderunit, oup_name, sto_number, dpt_name, dpt_number,
        SIB_IdealMargin, ven_companyname, convert(varchar(10), inv_lastreceived,
        120), convert(varchar(10), inv_lastsold, 120), inv_lastcost,
        SIB_BasePrice, inv_onhand, inv_onorder, inv_intransit, inv_memo,
        PI1_Description, PI2_Description, PI3_Description, PI4_Description,
        INV_PowerField1, INV_PowerField2, INV_PowerField3, INV_PowerField4 FROM
        catapult.ecrs.v_InventoryMaster WHERE trim(ven_companyname) IN
        ('EDI-ALOE') AND trim(dpt_number) != '999999' ORDER BY PI1_Description,
        PI2_Description
      </textarea>
      <button
        type="submit"
        form="queryInvMasterTable"
        style="display:block; float:left">vInvMasterQuery</button
      >
    </div>
  </form>
</div>
