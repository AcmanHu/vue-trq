<template>
    <div id="page4">
        <div class="page4">
            <div style="min-width: 1100px; width: 90%;margin:  0 auto;">
                <h4 style="text-align: center;margin-top:20px;">天然气工程安装缴费单</h4>
                <table style="width: 100%;margin: 0px auto;border-collapse:collapse;" cellspacing="0" class="table_top" border="1" height="150">
            <!-- 表格标题 -->
            <!-- 工程预收费用 -->
                        <tr>
                            <td style="height: 60px; text-align: center;" colspan="7">工程预收费用</td>
                        </tr>
            <!-- 预交费时间 -->
                        <tr>
                            <td style="height: 60px;" colspan="3">预交费时间:
                                <DatePicker type="date" placeholder="请选择时间" style="width: 200px"></DatePicker>
                            </td>
                            <td style="height: 60px;" colspan="4">	开票单位名称(与合同一致)：
                                <input type="text" style="width: 482px;height: 58px;border: none;outline: none;">
                            </td>
                        </tr>
            <!-- 工程项目名称 -->
                    <tr>
                        <td style="height: 60px;" colspan="2">工程项目名称:</td>
                        <td colspan="5">
                            <input type="text" style="width: 900px;height: 58px;border: none;outline: none;">
                        </td>
                    </tr>
            <!-- 工程项目编号 -->
                    <tr>
                        <td style="height: 60px;" colspan="2">工程项目编号:</td>
                        <td colspan="5">
                            <input type="text" style="width: 900px;height: 58px;border: none;outline: none;">
                        </td>
                    </tr>
            <!-- 第一次 -->
                    <tr>
                        <th rowspan="3" style="width: 60px;">第<br>一<br>次</th>
                        <td style="text-align: center;">预收设计查勘费</td>
                        <td>小写：
                            <input type="text" style="width: 74.8px;height: 50px;border: none;outline: none;">
                        </td>
                        <td>大写：
                            <input type="text" style="width: 127.6px;height: 50px;border: none;outline: none;">
                        </td>
                        <td>发票(收据)号：
                            <input type="text" name="number" style="width: 81.5px;height: 50px;padding-right: 16.1px;border: none;outline: none;">
                        </td>
                        <td>收款人：
                            <input type="text" style="width: 84.4px;height: 50px;border: none;outline: none;">
                        </td>
                        <td>日期：
                           <DatePicker type="date" placeholder="请选择时间" style="width: 200px"></DatePicker>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: center;">灶具、燃气具销售</td>
                        <td>小写：
                            <input type="text" style="width: 74.8px;height: 50px;border: none;outline: none;">
                        </td>
                        <td>大写：
                            <input type="text" style="width: 127.6px;height: 50px;border: none;outline: none;">
                        </td>
                        <td>发票(收据)号：
                            <input type="text" name="number" style="width: 81.5px;height: 50px;padding-right: 16.1px;border: none;outline: none;">
                        </td>
                        <td>收款人：
                            <input type="text" style="width: 84.4px;height: 50px;border: none;outline: none;">
                        </td>
                        <td>日期：
                           <DatePicker type="date" placeholder="请选择时间" style="width: 200px"></DatePicker>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: center;">预收工程款</td>
                        <td>小写：
                            <input type="text" style="width: 74.8px;height: 50px;border: none;outline: none;">
                        <td>大写：
                            <input type="text" style="width: 127.6px;height: 50px;border: none;outline: none;">
                        </td>
                        <td>发票(收据)号：
                            <input type="text" name="number" style="width: 81.5px;height: 50px;padding-right: 16.1px;border: none;outline: none;">
                        </td>
                        <td>收款人：
                            <input type="text" style="width: 84.4px;height: 50px;border: none;outline: none;">
                        </td>
                        <td>日期：
                           <DatePicker type="date" placeholder="请选择时间" style="width: 200px"></DatePicker>
                        </td>
                    </tr>
            <!-- 第二次 -->
                    <tr>
                        <th rowspan="2" style="width: 60px;">第<br>二<br>次</th>
                        <td style="text-align: center;width: 238px;">灶具、燃气具销售</td>
                        <td>小写：
                            <input type="text" style="width: 74.8px;height: 50px;border: none;outline: none;">
                        </td>
                        <td>大写：
                            <input type="text" style="width: 127.6px;height: 50px;border: none;outline: none;">
                        </td>
                        <td>发票(收据)号：
                            <input type="text" name="number" style="width: 81.5px;height: 50px;padding-right: 16.1px;border: none;outline: none;">
                        </td>
                        <td>收款人：
                            <input type="text" style="width: 84.4px;height: 50px;border: none;outline: none;">
                        </td>
                        <td>日期：
                           <DatePicker type="date" placeholder="请选择时间" style="width: 200px"></DatePicker>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: center;">预收工程款</td>
                        <td>小写：
                            <input type="text" style="width: 74.8px;height: 50px;border: none;outline: none;">
                        </td>
                        <td>大写：
                            <input type="text" style="width: 127.6px;height: 50px;border: none;outline: none;">
                        </td>
                        <td>发票(收据)号：
                            <input type="text" name="number" style="width: 81.5px;height: 50px;padding-right: 16.1px;border: none;outline: none;">
                        </td>
                        <td>收款人：
                            <input type="text" style="width: 84.4px;height: 50px;border: none;outline: none;">
                        </td>
                        <td>日期：
                           <DatePicker type="date" placeholder="请选择时间" style="width: 200px"></DatePicker>
                        </td>
                    </tr>
            <!-- 工程结算 -->
                    <tr>
                        <th rowspan="3">工<br>程<br>结<br>算</th>
                        <td style="text-align: center;">工程款结算金额(含预收设计查勘费，与结算表一致)</td>
                        <td colspan="2">小写：
                            <input type="text" style="width: 74.8px;height: 70px;border: none;outline: none;">
                        </td>
                        <td colspan="3">大写：
                            <input type="text" style="width: 500px;height: 70px;border: none;outline: none;">
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: center;">本次用户应补金额</td>
                        <td>小写：
                            <input type="text" style="width: 74.8px;height: 50px;border: none;outline: none;">
                        </td>
                        <td>大写：
                            <input type="text" style="width: 127.6px;height: 50px;border: none;outline: none;">
                        </td>
                        <td>发票(收据)号：
                            <input type="text" style="width: 81.5px;height: 50px;padding-right: 16.1px;border: none;outline: none;">
                        </td>
                        <td>收款人：
                            <input type="text" style="width: 84.4px;height: 50px;border: none;outline: none;">
                        </td>
                        <td>日期：
                           <DatePicker type="date" placeholder="请选择时间" style="width: 200px"></DatePicker>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: center;">本次用户应退金额</td>
                        <td>小写：
                            <input type="text" style="width: 74.8px;height: 50px;border: none;outline: none;">
                        <td>大写：
                            <input type="text" style="width: 127.6px;height: 50px;border: none;outline: none;">
                        </td>
                        <td>发票(收据)号：
                            <input type="text" name="number" style="width: 81.5px;height: 50px;padding-right: 16.1px;border: none;outline: none;">
                        </td>
                        <td>收款人：
                            <input type="text" style="width: 84.4px;height: 50px;border: none;outline: none;">
                        </td>
                        <td>日期：
                           <DatePicker type="date" placeholder="请选择时间" style="width: 200px"></DatePicker>
                        </td>
                    </tr>
                </table>
            <!-- 预存气费 -->
                <table style="width: 100%;margin: 80px 0 auto;border-collapse:collapse;" cellspacing="0" class="table_top" border="1" height="150">
                    <tr>
                        <th rowspan="3" style="width: 60px;">预<br>存<br>费<br>气</th>
                        <td style="text-align: center;width: 238px;">第一次预存费气</td>
                        <td>小写：
                            <input type="text" style="width: 74.8px;height: 50px;border: none;outline: none;">
                        <td>大写：
                            <input type="text" style="width: 127.6px;height: 50px;border: none;outline: none;">
                        </td>
                        <td>发票(收据)号：
                            <input type="text" name="number" style="width: 81.5px;height: 50px;padding-right: 16.1px;border: none;outline: none;">
                        </td>
                        <td>收款人：
                            <input type="text" style="width: 84.4px;height: 50px;border: none;outline: none;">
                        </td>
                        <td>日期：
                           <DatePicker type="date" placeholder="请选择时间" style="width: 200px"></DatePicker>
                        </td>
                    </tr>
                    <td style="text-align: center;">第二次预存废气</td>
                        <td>小写：
                            <input type="text" style="width: 74.8px;height: 50px;border: none;outline: none;">
                        <td>大写：
                            <input type="text" style="width: 127.6px;height: 50px;border: none;outline: none;">
                        </td>
                        <td>发票(收据)号：
                            <input type="text" name="number" style="width: 81.5px;height: 50px;padding-right: 16.1px;border: none;outline: none;">
                        </td>
                        <td>收款人：
                            <input type="text" style="width: 84.4px;height: 50px;border: none;outline: none;">
                        </td>
                        <td>日期：
                           <DatePicker type="date" placeholder="请选择时间" style="width: 200px"></DatePicker>
                        </td>
                    </tr>
                    <tr>
                        <td style="height: 400px;text-align: center;" colspan="6">
                            <li style="list-style-type: none;text-align: left;">
                                <p style="text-align: left;">经营科：此客户本次工程费用已全部完结，预存气费合计<input type="text"  style="width: 60px;height: 20px;">元(大写：<input type="text" style="width: 100px;height: 20px;">),请及时办理后续相关手续。
                                </p>
                                <br>
                                <p>财务科(签章)</p>
                            </li>
                            </a>
                        </td>
                    </tr>
                </table>
                <div style="text-align:right;margin:20px 0;">
                    <Button type="primary">保存</Button>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            single:false
        }
    }
}
</script>

<style lang="scss" scoped>
    .page4{
        font-size: 16px;
    }
    td,th{border: 1px solid #000000;}
	td{padding-left: 10px;}
    input{
        border: none;
        outline: none;
        text-align: center;
    }
</style>
