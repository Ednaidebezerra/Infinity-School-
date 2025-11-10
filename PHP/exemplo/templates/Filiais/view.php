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
            <?= $this->Html->link(__('Edit Filiai'), ['action' => 'edit', $filiai->id], ['class' => 'side-nav-item']) ?>
            <?= $this->Form->postLink(__('Delete Filiai'), ['action' => 'delete', $filiai->id], ['confirm' => __('Are you sure you want to delete # {0}?', $filiai->id), 'class' => 'side-nav-item']) ?>
            <?= $this->Html->link(__('List Filiais'), ['action' => 'index'], ['class' => 'side-nav-item']) ?>
            <?= $this->Html->link(__('New Filiai'), ['action' => 'add'], ['class' => 'side-nav-item']) ?>
        </div>
    </aside>
    <div class="column-responsive column-80">
        <div class="filiais view content">
            <h3><?= h($filiai->name) ?></h3>
            <table>
                <tr>
                    <th><?= __('Name') ?></th>
                    <td><?= h($filiai->name) ?></td>
                </tr>
                <tr>
                    <th><?= __('Ident Fiscal') ?></th>
                    <td><?= h($filiai->ident_fiscal) ?></td>
                </tr>
                <tr>
                    <th><?= __('Id') ?></th>
                    <td><?= $this->Number->format($filiai->id) ?></td>
                </tr>
                <tr>
                    <th><?= __('Id Fornecedor') ?></th>
                    <td><?= $this->Number->format($filiai->id_fornecedor) ?></td>
                </tr>
            </table>
        </div>
    </div>
</div>
