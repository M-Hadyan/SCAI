<template>
  <div class="col-xl-4">
    <!--begin::List Widget 14-->
    <div class="card card-custom card-stretch gutter-b">
      <!--begin::Header-->
      <div class="card-header border-0">
        <h3 class="card-title font-weight-bolder text-dark">{{ $t('bills') }} </h3>
        <div class="card-toolbar">
          <div class="dropdown dropdown-inline">
            <a
              href="#"
              class="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="ki ki-bold-more-ver"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-md dropdown-menu-right">
              <!--begin::Navigation-->
              <ul class="navi navi-hover">
                <li class="navi-header font-weight-bold py-4">
                  <span class="font-size-lg">Choose Label:</span>
                  <i
                    class="flaticon2-information icon-md text-muted"
                    data-toggle="tooltip"
                    data-placement="right"
                    title=""
                    data-original-title="Click to learn more..."
                  ></i>
                </li>
                <li class="navi-separator mb-3 opacity-70"></li>
                <li class="navi-item">
                  <a href="#" class="navi-link">
                    <span class="navi-text">
                      <span
                        class="label label-xl label-inline label-light-success"
                        >Customer</span
                      >
                    </span>
                  </a>
                </li>
                <li class="navi-item">
                  <a href="#" class="navi-link">
                    <span class="navi-text">
                      <span
                        class="label label-xl label-inline label-light-danger"
                        >Partner</span
                      >
                    </span>
                  </a>
                </li>
                <li class="navi-item">
                  <a href="#" class="navi-link">
                    <span class="navi-text">
                      <span
                        class="label label-xl label-inline label-light-warning"
                        >Suplier</span
                      >
                    </span>
                  </a>
                </li>
                <li class="navi-item">
                  <a href="#" class="navi-link">
                    <span class="navi-text">
                      <span
                        class="label label-xl label-inline label-light-primary"
                        >Member</span
                      >
                    </span>
                  </a>
                </li>
                <li class="navi-item">
                  <a href="#" class="navi-link">
                    <span class="navi-text">
                      <span class="label label-xl label-inline label-light-dark"
                        >Staff</span
                      >
                    </span>
                  </a>
                </li>
                <li class="navi-separator mt-3 opacity-70"></li>
                <li class="navi-footer py-4">
                  <a class="btn btn-clean font-weight-bold btn-sm" href="#">
                    <i class="ki ki-plus icon-sm"></i>Add new</a
                  >
                </li>
              </ul>
              <!--end::Navigation-->
            </div>
          </div>
        </div>
      </div>
      <!--end::Header-->
      <!--begin::Body-->
      <div class="card-body pt-2">
                  <!--begin::Item-->
        <div v-for="transation of transations" class="d-flex flex-wrap align-items-center mb-10">
          <!--begin::Symbol-->
          <div class="symbol symbol-50 symbol-2by2 flex-shrink-0 mr-4">
            <div class="symbol-label">
              <img v-bind:src="transation.img" height="50" width="50" class="img" />
            </div>
          </div>
          <!--end::Symbol-->
          <!--begin::Title-->
          <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3">
            <a href="#" class=" text-dark-75 font-weight-bolder text-hover-primary font-size-lg " >
              {{ transation.name }} 
            </a>
            <span class="text-muted font-weight-bold font-size-sm my-1">{{ transation.city }} </span>
          </div>
          <!--end::Title-->
          <!--begin::Info-->
          <div class="d-flex align-items-center py-lg-0 py-2">
            <div class="d-flex flex-column text-right">
              <span class="text-dark-75 font-weight-bolder font-size-h4"
                >{{ transation.cost }} </span
              >
              <span class="text-muted font-size-sm font-weight-bolder">{{ transation.date }} </span>
            </div>
          </div>
          <!--end::Info-->
        </div>
        <!--end::Item-->
      </div>
      <!--end::Body-->
    </div>
    <!--end::List Widget 14-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      transations: [],
    }
  },
  async fetch() {
    this.transations = await fetch(
      'https://60ff0400257411001707887d.mockapi.io/api/v1/Transations'
    ).then((res) => res.json())
  },
}
</script>

<style>
.img{
  border-radius: 0.42rem;
}
</style>
