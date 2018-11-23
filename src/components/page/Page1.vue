<template>
    <div id="page1">
        <div class="page1">
            <div class="content">
                <div class="cot1">
                    <span class="title">燃气客户新安装的申请须知</span>
                    <span class="title2">咨询电话63500370</span>
                    <p>徐</p>
                    <p>（一）非居民（商业、集体）客户申请要件，收300元（查勘费）</p>
                    <p>1、产权证或购房合同复印件（有效日期）；</p>
                    <p>无产权由相关单位开具产权证明盖章</p>
                    <p>2、产权方身份证复印件</p>
                    <p>3、租赁同上资料，且还须租赁合同复印件（有效日期）及租赁方身份证复印件</p>
                    <p>4、产权方天然气同意书（签字或盖章）</p>
                    <p>5、营业执照或组织机构代码证复印件及单位申请书盖章（个人不需要）</p>
                    <p>6、商铺的户内平面图及用气场所的CAD平面图纸质版、电子版（必须是dwg格式，2007版及一下，申请时U盘拷贝，需备注申请名字），标出厨房面积、灶具位置及灶具名称、
                        操作台、门窗位置；燃气设备用气量清单厂家盖章；燃气设备用气量说明书；燃具的检验报告（灶具熄火保护装置合格）
                    </p>
                    <p>7、商业、集体客户需安装燃气泄漏报警控制系统，通风条件不好的商集客户还需要安装机械送排风系统</p>
                    <p>燃气非居客户须进行燃气维护保养</p>
                </div>
                <div class="cot2">
                    <p>（二）居民客户新安装申请要件</p>
                    <p>1、产权证复印件（有限日期）</p>
                    <p>2、身份证复印件（有限日期）</p>
                    <p>3、天然气申请表</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .page1{
        font-size: 16px;
        .content{
            width: 40%;
            margin: 20px auto;
            border: 1px solid black;
            padding: 20px;
            p{
                line-height: 35px;
            }
            .cot1{
                .title{
                    font-weight: bold;
                    color: black;
                }
                .title2{
                    float: right;
                }
            }
            .cot2{
                margin-top: 40px;
            }
        }
    }
</style>
