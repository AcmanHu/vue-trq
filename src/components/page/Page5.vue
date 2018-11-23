<template>
    <div id="page5">
        <div class="page5">
            <div style="width: 90%;min-width: 1100px;margin: 20px auto;">
				<h4 style="text-align:center;">天然气工程安装流程表</h4>
				<table style="width: 100%;" cellpadding="0" cellspacing="0" border="1">
		<!-- 天然气工程安装流程表 -->
						<tr>
		<!-- 市场科 -->
							<td rowspan="5" style="width: 40px;text-align: center;">市<br>场<br>科</td>
		<!-- 工作受理时间 -->
							<td colspan="2" style="height: 40px;">工作受理时间
								<DatePicker type="date" placeholder="请选择时间" style="width: 200px"></DatePicker>
							</td>
		<!-- 开票单位名称 -->
							<td style="height: 40px;text-align: center;">开票单位名称</td>
							<td colspan="3"><input type="text" style="width: 600px;height: 38px;border: none;outline: none;"></td>
						</tr>
		<!-- 选项 -->
						<tr>
							<td colspan="6" style="height: 40px;">
								<Checkbox style="margin-left:20px;" >商业</Checkbox>
								<Checkbox >集体</Checkbox>
								<Checkbox >拆迁改</Checkbox>
								<Checkbox >安全整改</Checkbox>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他<input type="text" style="margin-left: 12px;height: 26px;width: 300px;border-top: 0;border-right: 0;border-left: 0;border-bottom: 1px solid #000000;outline: none;">
							</td>
						</tr>
		<!-- 联系人、联系电话、用气性质-->
						<tr style="text-align: center;">
							<td style="height: 40px;">联系人</td>
							<td><input type="text" style="width: 180px;height: 38px;border: none;outline: none;"></td>
							<td style="height: 40px;">联系电话</td>
							<td><input type="text" style="width: 180px;height: 38px;border: none;outline: none;"></td>
							<td style="height: 40px;">用气性质</td>
							<td><input type="text" style="width: 180px;height: 38px;border: none;outline: none;"></td>
						</tr>
		<!-- 工程量、预收金额、收款人-->
						<tr style="text-align: center;">
							<td style="height: 40px;">工程量</td>
							<td><input type="text" style="width: 180px;height: 38px;border: none;outline: none;">户</td>
							<td style="height: 40px;">预收金额</td>
							<td><input type="text" style="width: 180px;height: 38px;border: none;outline: none;"></td>
							<td style="height: 40px;">收款人</td>
							<td><input type="text" style="width: 180px;height: 38px;border: none;outline: none;"></td>
						</tr>
		<!-- 说明 -->
						<tr>
							<td colspan="6" style="height: 200px;" valign="top">说明:<br><textarea rows="10" cols="30" style="text-indent: 1cm;resize:none;width: 99%;height: 91%;border: none;outline: none;"></textarea></td>
						</tr>
		<!-- 设计 -->
						<tr>
							<td rowspan="2" style="width: 40px;text-align: center;">设<br>计</td>
		<!-- 设计制图单位 -->
							<td style="text-align: center;height: 40px;">设计制图单位</td>
							<td colspan="2"><input type="text" style="width: 340px;height: 38px;border: none;outline: none;"></td>
		<!-- 制图人员 -->
							<td style="text-align: center;height: 40px;">制图人员</td>
							<td colspan="2"><input type="text" style="width: 340px;height: 38px;border: none;outline: none;"></td>
						</tr>
						<tr>
		<!-- 任务指令时间 -->
							<td style="text-align: center;height: 40px;">任务指令时间</td>
							<td colspan="2"><DatePicker type="date" placeholder="请选择时间" style="width: 200px"></DatePicker></td>
		<!-- 提交图纸方案时间 -->
							<td style="text-align: center;height: 40px;">提交图纸方案时间</td>
							<td colspan="2"><DatePicker type="date" placeholder="请选择时间" style="width: 200px"></DatePicker></td>
						</tr>
		<!-- 市场科 -->
						<tr>
							<td rowspan="3" style="width: 40px;text-align: center;">市<br>场<br>科</td>
		<!-- 预算金额 -->
							<td style="height: 40px;text-align: center;">预算金额</td>
							<td colspan="2"><input type="text" style="width: 340px;height: 38px;border: none;outline: none;"></td>
		<!-- 通知用户缴费时间 -->
							<td  style="height: 40px;text-align: center;">通知用户缴费时间</td>
							<td colspan="2"><DatePicker type="date" placeholder="请选择时间" style="width: 200px"></DatePicker></td>
						</tr>
						<tr>
		<!-- 材料表移交时间 -->
							<td  style="height: 40px;text-align: center;">材料表移交时间</td>
							<td colspan="2"><DatePicker type="date" placeholder="请选择时间" style="width: 200px"></DatePicker></td>
		<!-- 接收人 -->
							<td style="height: 40px;text-align: center;">接收人</td>
							<td colspan="2"><input type="text" style="width: 340px;height: 38px;border: none;outline: none;"></td>
						</tr>
						<tr style="height: 40px;">
		<!-- 预收金额 -->
							<td style="height: 40px;text-align: center;">预收金额</td>	
		<!-- 大写 -->
							<td colspan="2" style="text-align: center;">小写：<input type="text" style="height: 38px;width: 110px;border: none;outline: none;">大写:<input type="text" style="height: 38px;width: 140px;padding-left: 10px;border: none;outline: none;"></td>
		<!-- 日期 -->
							<td>日期<DatePicker type="date" placeholder="请选择时间" style="width: 200px"></DatePicker></td>
		<!-- 缴纳人 -->
							<td colspan="2" style="text-align: center;">缴纳人:<input type="text" style="margin-left: 10px;height: 38px;border: none;outline: none;"></td>
						</tr>
		<!-- 市场科 -->	
						<tr>
							<td style="width: 40px;text-align: center;">市<br>场<br>科</td>
		<!-- 技术交底时间 -->
							<td colspan="6" style="padding-top: 2px;padding-bottom: 2px;">技术交底时间<DatePicker type="date" placeholder="请选择时间" style="width: 200px;margin-left:60px;"></DatePicker>
		<!-- 碰口停气阀门编号 -->
							<br><br>碰口停气阀门编号(生运科填写)：<input type="text" style="padding-left: 10px;border: none;outline: none;border-bottom: 1px solid #000000;"><br><br></td>
						</tr>
		<!-- 工程科 -->
						<tr>
							<td style="width: 40px;text-align: center;">工<br>程<br>科</td>
		<!-- 工程施工指令时间 -->
							<td style="text-align: center;">工程施工指令时间</td>
							<td colspan="2"><DatePicker type="date" placeholder="请选择时间" style="width: 200px"></DatePicker></td>
		<!-- 工程验收合格时间 -->
							<td style="text-align: center;">工程验收合格时间</td>
							<td colspan="2"><DatePicker type="date" placeholder="请选择时间" style="width: 200px"></DatePicker></td>
						</tr>
		<!-- 技术质量科 -->
						<tr>
							<td style="width: 40px;text-align: center;">技<br>术<br>质<br>量<br>科</td>
		<!-- 设备编号 -->
							<td colspan="6">设备编号：<br><input type="text" style="height: 30px;padding-left: 10px;border: none;outline: none;border-bottom: 1px solid #000000;">
		<!-- 移交时间 -->
							<br><br>移交时间：<DatePicker type="date" placeholder="请选择时间" style="width: 200px"></DatePicker><TimePicker type="time" placeholder="Select time" style="width: 168px"></TimePicker>时
		<!-- 接收人 -->
						接收人:<input type="text" style="padding-left: 10px;border: none;outline: none;border-bottom: 1px solid #000000;"><br><br></td>
						</tr>
		<!-- 财务科 -->
						<tr>
							<td rowspan="2" style="width: 40px;text-align: center;">财<br>务<br>科</td>
		<!-- 结算金额 -->
							<td style="height: 40px;text-align: center;">结算金额</td>
							<td colspan="2"><input type="text" style="width: 340px;height: 38px;border: none;outline: none;"></td>
		<!-- 大写 -->
							<td style="height: 40px;text-align: center;">大写</td>
							<td colspan="2"><input type="text" style="width: 340px;height: 38px;border: none;outline: none;"></td>
						</tr>
						<tr>
		<!-- 收款人 -->
							<td style="height: 40px;text-align: center;">收款人</td>
							<td colspan="2"><input type="text" style="width: 340px;height: 38px;border: none;outline: none;"></td>
		<!-- 收款时间 -->
							<td style="text-align: center;">收款时间</td>
							<td colspan="2"><DatePicker type="date" placeholder="请选择时间" style="width: 200px"></DatePicker><TimePicker type="time" placeholder="Select time" style="width: 168px"></TimePicker>时</td>
						</tr>
		<!-- 市场科 -->
						<tr>
							<td style="width: 40px;text-align: center;">市<br>场<br>科</td>
							<td colspan="6">
								<br><p style="text-align: center;">该然气工程已竣工，质量检收合格，费用完清，请你部门按规定办理相关通气手续。</p><br><br>
		<!-- 审核人 -->
								<span style="text-align: left;text-align: right;">审核人：<input type="text" style="border: none;outline: none;border-bottom: 1px solid #000000;"></span>
		<!-- 经办人 -->
								<span style="text-align: center;margin-left: 20px;">经办人：<input type="text" style="border: none;outline: none;border-bottom: 1px solid #000000;"></span>
		<!-- 时间 -->
								<span style="text-align: right;text-align: right;float: right;">时间：<DatePicker type="date" placeholder="请选择时间" style="width: 200px"></DatePicker><br><br></span>
							</td>
						</tr>
		<!-- 经管科 -->
						<tr>
							<td style="width: 40px;text-align: center;">经<br>管<br>科</td>
		<!-- 管理部门 -->
							<td style="text-align: center;">管理部门</td>
							<td colspan="5"><input type="text" style="height: 48px;width: 100%;border: none;outline: none;"></td>
						</tr>
		<!-- 备注 -->
						<tr>
							<td style="height: 300px;" colspan="7" valign="top">备注:<br><textarea rows="10" cols="30" style="text-indent: 1cm;resize:none;width: 99%;height: 82%;border: none;outline: none;"></textarea><br>
								<Checkbox style="margin-left:20px;" >特殊用气场所</Checkbox>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Checkbox >(超)高层建筑用气</Checkbox></td>
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
	.page5{
		font-size: 16px;
	}
   table{
       border-collapse:collapse;
   }
//    tr{height: 30px;}
   td,table{
       border: 1px solid black;
   }
</style>
