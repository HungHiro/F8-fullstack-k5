## Responsive Web Déign
- Thiết kế web đáp ứng
- Dựa vào kích thước trình duyệt, thiết bị để thay đổi giao diện giúp tương thích với các thiết bị
- Ngoài responsive, để có thể dùng adaptive để thiết kế web đáp ứng

## Breakpoint
- Điểm dừng mà tại đó giao diện sẽ thay đổi
- Ví dụ: 
* 1400
* 1200
* 992
* 768
* 576

Lưu ý: 
- Không có breakpoint cố định, chuẩn trong tất cả các dự án
- Breakpoint sẽ dựa vào cấu trúc dự án
- Tip: Dựa vào các breakpoint phổ biến trên các dự án framework rồi phát triển thêm

## Các trường phái responsive
- Desktop first: từ giao diện màn hình lớn > màn hình bé hơn
- Mobile first: từ giao diện bé nhất > màn hình lớn hơn => nên dùng

## Media Queries:
- Dựa vào cac breakpoint để viết
- Dựa vào cách responsive: Desktop or Mobile

## Desktop first:
```css
@media screen and (max-width: 1399px) {
    // selector css
}
@media screen and (max-width: 1199px) {
    // selector css
}
@media screen and (max-width: 991px) {
    // selector css
}
@media screen and (max-width: 767px) {
    // selector css
}
@media screen and (max-width: 575px) {
    // selector css
}
```
Lưu ý: Viết đúng thứ tự media queries từ cao xg thấp, k đảo lộn.

## Mobile First
```css
@media screen and (max-width: 575px) {
    // selector css
}
@media screen and (min-width: 768px) {
    // selector css
}
@media screen and (min-width: 992px) {
    // selector css
}
@media screen and (min-width: 1200px) {
    // selector css
}
@media screen and (min-width: 1400px) {
    // selector css
}
```
Lưu ý: Viết đúng thứ tự media queries từ thấp lên cao, k đảo lộn.
## Media Viewport
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```