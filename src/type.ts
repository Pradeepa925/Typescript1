interface ApiResponse<T> {
  status: number;
  data: T;
}
let apiRes: ApiResponse<string> = {
  status: 200,
  data: "Success"
};
console.log(apiRes);