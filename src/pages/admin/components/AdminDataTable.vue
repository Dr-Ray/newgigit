<template>
  <div class="w-full mt-6 px-6 border border-solid border-[#E0E0E0] py-4">
    <div class="tbl flex items-center justify-between">
      <div class="flex items-center gap-4">
        <p class="font-medium">User Details</p>
        <div class="flex items-center gap-3 bg-[#D9D9D938] rounded-xl px-4 border">
          <ion-icon name="search" class="text-[#BBBBBC] text-xl"></ion-icon>
          <input
            type="text"
            class="rounded-xl w-full h-full text-lg text-[#BBBBBC] py-2"
            placeholder="Search for users"
          />
        </div>
      </div>
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-3 py-2 pl-2 pr-4 rounded-xl border">
          <p class="text-[#424242]" style="font-size: 8px">Active users</p>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
        <div class="flex items-center gap-3 py-2 pl-2 pr-4 rounded-xl border">
          <p class="text-[#424242]" style="font-size: 8px">This month</p>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
      </div>
    </div>

    <div class="tbl-bdy w-full">
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table
                class="min-w-full text-center text-sm font-light text-surface dark:text-white"
              >
                <thead class="font-medium">
                  <tr>
                    <th scope="col" class="px-6 py-4">User</th>
                    <th scope="col" class="px-6 py-4">Email address</th>
                    <th scope="col" class="px-6 py-4">Wallet Balance</th>
                    <th scope="col" class="px-6 py-4">Status</th>
                    <th scope="col" class="px-6 py-4">Action</th>
                    <th scope="col" class="px-6 py-4">Mail User</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="whitespace-nowrap px-6 py-4 font-medium">Etorojah</td>
                    <td class="whitespace-nowrap px-6 py-4">hello@gmail.com</td>
                    <td class="whitespace-nowrap px-6 py-4">$342</td>
                    <td class="whitespace-nowrap px-6 py-4 text-[#247E6C]">Active</td>
                    <td class="whitespace-nowrap px-6 py-4">
                      <button class="rounded-xl">Suspend user</button>
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">
                      <button
                        class="rounded-xl border border-solid border-[#0071CE] bg-white text-[#0071CE] hover:bg-[#0071CE] hover:text-[white]"
                      >
                        Mail user
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td class="whitespace-nowrap px-6 py-4 font-medium">Etorojah</td>
                    <td class="whitespace-nowrap px-6 py-4">hello@gmail.com</td>
                    <td class="whitespace-nowrap px-6 py-4">$342</td>
                    <td class="whitespace-nowrap px-6 py-4 text-[#247E6C]">Active</td>
                    <td class="whitespace-nowrap px-6 py-4">
                      <button class="rounded-xl">Suspend user</button>
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">
                      <button
                        class="rounded-xl border border-solid border-[#0071CE] bg-white text-[#0071CE] hover:bg-[#0071CE] hover:text-[white]"
                      >
                        Mail user
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminDataTable1",
};
</script>

<style scoped></style>
