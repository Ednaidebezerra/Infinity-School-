<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Filiai $filiai
 */
?>
<div class="row">
    <aside class="column">
        <div class="side-nav">
            <h4 class="heading"><?= __('Actions') ?></h4>
            <?= $this->Form->postLink(
                __('Delete'),
                ['action' => 'delete', $filiai->id],
                ['confirm' => __('Are you sure you want to delete # {0}?', $filiai->id), 'class' => 'side-nav-item']
            ) ?>
            <?= $this->Html->link(__('List Filiais'), ['action' => 'index'], ['class' => 'side-nav-item']) ?>
        </div>
    </aside>
    <div class="column-responsive column-80">
        <div class="filiais form content">
            <?= $this->Form->create($filiai) ?>
            <fieldset>
                <legend><?= __('Edit Filiai') ?></legend>
                <?php
                    echo $this->Form->control('id_fornecedor');
                    echo $this->Form->control('name');
                    echo $this->Form->control('ident_fiscal');
                ?>
            </fieldset>
            <?= $this->Form->button(__('Submit')) ?>
            <?= $this->Form->end() ?>
        </div>
    </div>
</div>
